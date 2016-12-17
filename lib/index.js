var map1;

function initmap() {
    populate();
}
var circle;
var geofenceData;
var trackHashMap = {};
var markers;
var temp = [];
var circle;
var greenIcon = L.icon({
    iconUrl: 'red-marker.png',
});

function populate() {
    $.getJSON("geofence.json", function(data) {
        map1 = new L.Map('clusterMap');
        var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
        var osm = new L.TileLayer(osmUrl, {
            minZoom: 1,
            maxZoom: 20,
            attribution: osmAttrib
        });
        map1.setView(new L.LatLng(data[0].batch.geoJSONLocation.coordinates[1], data[0].batch.geoJSONLocation.coordinates[0]), 13);
        map1.addLayer(osm);
        markers = new L.markerClusterGroup();
        geofenceData = data;
        for (iter in data) {
            var m = L.marker(L.latLng(data[iter].batch.geoJSONLocation.coordinates[1], data[iter].batch.geoJSONLocation.coordinates[0])).bindPopup("FE-name: " + data[iter]['fe-name'][0] + "<br>Batch-Id:" + data[iter]['_id']).on('remove', function() {
                // console.log('here');
                // map1.removeLayer(circle);
            });
            $('#batches').append($('<option>', {
                value: data[iter]._id,
                text: data[iter]._id
            }));
            trackHashMap[data[iter]._id] = iter;
            temp.push(m);
            map1.addLayer(m);
            //markers.addLayer(m);
        }
        temp[trackHashMap[$('#batches').val()]].fireEvent('click');
        map1.panTo(temp[parseInt(trackHashMap[$('#batches').val()])].getLatLng());
        map1.setZoom(17);
        circle = L.circle(temp[parseInt(trackHashMap[$('#batches').val()])].getLatLng(), {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.3,
            radius: 50
        });
        map1.addLayer(circle);
        $('#batches').change(function() {
            if (circle) {
                map1.removeLayer(circle);
                removeGeoFenceMarkers();
            };
            //console.log(temp[parseInt(trackHashMap[$('#batches').val()])].getLatLng());
            map1.panTo(temp[parseInt(trackHashMap[$('#batches').val()])].getLatLng());
            map1.setZoom(17);
            circle = L.circle(temp[parseInt(trackHashMap[$('#batches').val()])].getLatLng(), {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.3,
                radius: 50
            });
            map1.addLayer(circle);
            addGeoFenceMarkers();
            temp[trackHashMap[$('#batches').val()]].fireEvent('click');
        });
        map1.addLayer(markers);
    });
}
var geofenceMarkers = [];

function addGeoFenceMarkers() {
    for (iter in geofenceData[trackHashMap[$('#batches').val()]]['latitude']) {
        var m = L.marker(L.latLng(parseFloat(geofenceData[trackHashMap[$('#batches').val()]]['latitude'][iter]['latitude']), parseFloat(geofenceData[trackHashMap[$('#batches').val()]]['latitude'][iter]['longitude'])), {
            icon: greenIcon
        });
        map1.addLayer(m);
        geofenceMarkers.push(m);
    }
}

function removeGeoFenceMarkers() {
    for (iter in geofenceMarkers) {
        map1.removeLayer(geofenceMarkers[iter]);
    }
}
// function populate() {
//     $.getJSON("geofence.json", function(data) {
//         var markers = new L.markerClusterGroup();
//         for (var iter = 0; iter < 100; iter++) {
//             var m = L.marker(L.latLng(data[iter].batch.geoJSONLocation.coordinates[1], data[iter].batch.geoJSONLocation.coordinates[0])).bindPopup("FE-name: " + data[iter]['fe-name'][0]);
//             // .on('click', function(e) {
//             //     //var m1 = L.marker(L.latLng(0, 0));
//             //     var circle = L.circle([data[iter].batch.geoJSONLocation.coordinates[1], data[iter].batch.geoJSONLocation.coordinates[0]], {
//             //         color: 'red',
//             //         fillColor: '#f03',
//             //         fillOpacity: 0.3,
//             //         radius: 500
//             //     });
//             //     map1.addLayer(circle);
//             // }).on('remove', function(e) {});
//             markers.addLayer(m);
//         }
//         map1.addLayer(markers);
//     });
// }