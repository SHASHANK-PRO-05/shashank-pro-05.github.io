/**
 * Code for cluster map
 */
$(document).ready(function() {
    $.getJSON('/data/CollegeMarkers.json', function(data) {
        var map1 = new L.Map('clusterMap');
        var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
        var osm = new L.TileLayer(osmUrl, {
            minZoom: 1,
            maxZoom: 20,
            attribution: osmAttrib
        });
        map1.setView(new L.LatLng(0, 0), 1);
        map1.addLayer(osm);
        var markers = L.markerClusterGroup();
        for (iter in data) {
            if (data[iter].latitude && data[iter].longitude) {
                var m = L.marker([data[iter].latitude, data[iter].longitude]).bindPopup("College: " + data[iter]['name'] + "<br>Latitude: " + data[iter].latitude + "<br>Longitude: " + data[iter].longitude);
                markers.addLayer(m);
            }
        }
        map1.addLayer(markers);
    });
});
/**
 * Code for Undergraduate trend
 */
$(document).ready(function() {
    $.getJSON('/data/selectiveUndergraduateCounts.json', function(data) {
        var height = 750;
        var width = 750;
        var offsets = {
            left: 50,
            right: 20,
            bottom: 300,
            top: 20
        };
        var svgWidth = width - offsets.left - offsets.right;
        var svgHeight = height - offsets.top - offsets.bottom;
        var svg = d3.select('#undergraduateTrend').append('svg').attr('height', height).attr('width', width).append("g").attr("transform", "translate(" + offsets.left + "," + offsets.top + ")");
        var max = 40000;
        var numberScale = d3.scaleLinear().domain([0, max]).range([svgHeight, 0]);
        var keys = Object.keys(data);
        //var collegeNameScale = d3.scaleBand().range([0, svgWidth]).padding(svgWidth / keys.length);
        var x = d3.scaleLinear().domain([1996, 2013]).range([0, svgWidth]);
        //collegeNameScale.domain(keys);
        //var yAxis = d3.axisLeft(numberScale);
        //var xAxis = d3.axisBottom(collegeNameScale);
        svg.append("g").call(d3.axisLeft(numberScale));
        var bubblessvg = svg.append("g");
        //svg.append("g").attr("transform", "translate(0," + svgHeight + ")").call(d3.axisBottom(xScale)).selectAll("text").attr("y", 0).attr("x", -9).attr("dy", ".35em").attr("transform", "rotate(-80)").style("text-anchor", "end").style('font-size', '12px');
        var slider = svg.append("g").attr("class", "slider").attr("transform", "translate(" + 5 + "," + (svgHeight + 5) + ")");
        slider.append("line").attr("class", "track").attr("x1", x.range()[0]).attr("x2", x.range()[1]).select(function() {
            return this.parentNode.appendChild(this.cloneNode(true));
        }).attr("class", "track-inset").select(function() {
            return this.parentNode.appendChild(this.cloneNode(true));
        }).attr("class", "track-overlay").call(d3.drag().on("start.interrupt", function() {
            slider.interrupt();
        }).on("start drag", function() {
            hue(parseInt(x.invert(d3.event.x)));
        }));
        slider.insert("g", ".track-overlay").attr("class", "ticks").attr("transform", "translate(0," + 18 + ")").selectAll("text").data(x.ticks(10)).enter().append("text").attr("x", x).attr("text-anchor", "middle").text(function(d) {
            return d + "°";
        });
        var handle = slider.insert("circle", ".track-overlay").attr("class", "handle").attr("r", 9).attr('cx', x(1996));
        var d3Color = d3.scaleLinear().domain([0, keys.length / 2, keys.length]).range(['red', 'green', 'blue']);
        bubblesSetup(1996);

        function hue(h) {
            handle.attr("cx", x(h));
            bubblesSetup(h);
        }

        function bubblesSetup(year) {
            var newData = [];
            for (iter in data) {
                if (!data[iter][year] || data[iter][year] == 'NULL') {
                    newData.push(0);
                } else {
                    newData.push(parseInt(data[iter][year]));
                }
            }
            //console.log(d3.max(newData));
            var bubbleScaleX = d3.scaleLinear().domain([0, 40000]).range([0, svgWidth - 40]);
            var bubbleScaleRadius = d3.scaleLinear().domain([0, d3.max(newData)]).range([5, 20]);
            var circles = bubblessvg.selectAll('circle').data(newData, function(d) {
                //console.log(newData);
            });
            circles.enter().append('circle').attr('cx', function(d, i) {
                //console.log(bubbleScaleX(d));
                return bubbleScaleX(d);
            }).attr('cy', function(d) {
                return numberScale(d);
            }).attr('r', function(d) {
                return bubbleScaleRadius(d);
            }).style('fill', function(d, i) {
                console.log(d3Color(i));
                return d3Color(i);
            }).attr('fill-opacity', 0.5).append("svg:title").text(function(d, i) {
                return 'College:' + keys[i] + "\nValue: " + d;
            });;
            circles.exit().transition().duration(500).attr("r", 0).remove();
        }
    })
});