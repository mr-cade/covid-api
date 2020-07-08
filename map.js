//leaflet.js
//Displaying a map.


var mymap = L.map('mapid').setView([39.419220, -111.950684], 4)


L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=wnclmoF7O9yOOZ4B4z7P',{
    attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',


}).addTo(mymap);



// Creating custom marker( pirate symbol)
var myIcon = L.icon({
    iconUrl: 'pirates.png',
    iconSize: [30, 30],
    iconAnchor: [20,20],
    popupAnchor: [-10, -15],
    
    
});

var calIcon = L.icon({
    iconUrl: 'pirates.png',
    iconSize: [30, 30],
    iconAnchor: [-30,25],
    popupAnchor: [-10, -15],
    
    
});

//Adding a marker on Utah.
L.marker([39.419220, -111.950684], {icon: myIcon}).addTo(mymap);



// Displays a pop-up message  when you hover over a marker.
L.marker([39.419220, -111.950684], {icon: myIcon}).addTo(mymap).bindTooltip("Utah: 25,005.");
L.marker([37.1843783,-123.7956171], {icon: calIcon}).addTo(mymap).bindTooltip("California: 271,493.");







// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://coronavirus-map.p.rapidapi.com/v1/spots/region?region=usa",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "coronavirus-map.p.rapidapi.com",
// 		"x-rapidapi-key": "aa6312c68dmsh577349eb085aef1p1ad893jsna7b038664bee"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });


//This is API per country.
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://coronavirus-map.p.rapidapi.com/v1/summary/latest",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-map.p.rapidapi.com",
		"x-rapidapi-key": "aa6312c68dmsh577349eb085aef1p1ad893jsna7b038664bee"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});




function statemarker (feature,layer){
        layer.bindTooltip("whats happening");
};





L.geoJSON(States.json, {
    onEachFeature: statemarker
}).addTo(mymap)

















//console.log(response.data["2020-01-22"].active_cases);

// var geojsonFeature = {
//     "type": "Feature",
//     "properties": {
//         "name": "Coors Field",
//         "amenity": "Baseball Stadium",
//         "popupContent": "This is where the Rockies play!"
//     },
//     "geometry": {
//         "type": "Point",
//         "coordinates": [-104.99404, 39.75621]
//     }
// };

// L.geoJSON(geojsonFeature).addTo(mymap);


// var myLines = [{
//     "type": "LineString",
//     "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
// }, {
//     "type": "LineString",
//     "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
// }];

// var myLayer = L.geoJSON().addTo(mymap);
// myLayer.addData(geojsonFeature);


















