//leaflet.js
//Displaying a map.


var mymap = L.map('mapid').setView([39.419220, -111.950684], 4);


L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=wnclmoF7O9yOOZ4B4z7P',{
    attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',


}).addTo(mymap);
var geoJson=L.geoJson(usadata).addTo(mymap); // dont call line 13 until the data is ready.

var cali= [270,000];



function getColor(d) { 
    // a function that takes name of the state and comes up with value. instead of d use any function like state
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}



function style(feature) {
    return {
        fillColor: getColor(feature.properties.density), // get the actual raw data.the function will be feature.properties.name
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

L.geoJson(usadata, {style: style}).addTo(mymap);


function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

function zoomToFeature(e) {
    mymap.fitBounds(e.target.getBounds());
}


function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

geojson = L.geoJson(usadata, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(mymap);



var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4> Confirmed Cases</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + '27,000' + ' people / mi<sup>2</sup>'
        : 'Hover over a state');
};

info.addTo(mymap);





























// Creating custom marker( pirate symbol)
// var myIcon = L.icon({
//     iconUrl: 'pirates.png',
//     iconSize: [30, 30],
//     iconAnchor: [20,20],
//     popupAnchor: [-10, -15],
    
    
// });

// var calIcon = L.icon({
//     iconUrl: 'pirates.png',
//     iconSize: [30, 30],
//     iconAnchor: [-30,25],
//     popupAnchor: [-10, -15],
    
    
// });

//Adding a marker on Utah.
// L.marker([39.419220, -111.950684], {icon: myIcon}).addTo(mymap);



// Displays a pop-up message  when you hover over a marker.
// L.marker([39.419220, -111.950684], {icon: myIcon}).addTo(mymap).bindTooltip("Utah: 25,005.");
// L.marker([37.1843783,-123.7956171], {icon: myIcon}).addTo(mymap).bindTooltip("California: 271,493.");

// var Alaska = [63.588753,-154.493062];


// L.marker(Alaska,{icon:calIcon}).addTo(mymap).bindTooltip("Alaska");

// var	Colorado = [39.550051,-105.782067];
// L.marker(Colorado,{icon:calIcon}).addTo(mymap).bindTooltip("Colorado");




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
    console.log(response.data.regions.usa.active_cases);
});










//console.log(response.data["2020-01-22"].active_cases);






















