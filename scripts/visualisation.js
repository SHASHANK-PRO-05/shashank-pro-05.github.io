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