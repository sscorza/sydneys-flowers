var mymap = L.map('mapid').setView([41.878113, -87.629799], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1IjoiaTM2MCIsImEiOiJjamZuYjYwaG4wbDRuMnFtZHNhYWhpbzc0In0.yMHIZKQj5MtG1fJBMAlXbA'
}).addTo(mymap);

var circle = L.circle([41.878113, -87.629799], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);