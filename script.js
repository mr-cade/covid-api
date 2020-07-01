// sets up covid query for later ajax pull
var region = prompt("select a region").trim() //needs to be a modal not a prompt
var covidQuery = {
	"async": true,
	"crossDomain": true,
	"url": "https://coronavirus-map.p.rapidapi.com/v1/summary/region?region=" + region,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-map.p.rapidapi.com",
		"x-rapidapi-key": "c73dfbc7ffmsh7f2ddc7cba39943p17cd81jsnd820b7f1d342"
	}
};
// pulls data from covid api and appends death toll to header -- add other data points and format numbers
$.ajax(covidQuery).done(function (response) {
    // searched location
    console.log(response);
    var activeCases = $("<h2>").text(region + " active cases: " + response.data.summary.active_cases);
    var totalCases = $("<h2>").text(region + " total cases: " + response.data.summary.total_cases);
    var totalRecovered = $("<h2>").text(region + " total recoveries: " + response.data.summary.recovered);
    var deathToll = $("<h2>").text(region + " total deaths: " + response.data.summary.deaths);
    $(".location").append(activeCases)
    $(".location").append(totalCases)    
    $(".location").append(totalRecovered)    
    $(".location").append(deathToll)
});


//   create aside with worldwide covid stats
var worldStats = {
	"async": true,
	"crossDomain": true,
	"url": "https://coronavirus-map.p.rapidapi.com/v1/summary/latest",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-map.p.rapidapi.com",
		"x-rapidapi-key": "c73dfbc7ffmsh7f2ddc7cba39943p17cd81jsnd820b7f1d342"
	}
}
$.ajax(worldStats).done(function (response) {
    console.log(response);
    // world wide stats
    var activeCases = $("<h2>").text("World wide active cases: " + response.data.summary.active_cases);
    var totalCases = $("<h2>").text("World wide total cases: " + response.data.summary.total_cases);
    var totalRecovered = $("<h2>").text("World wide recoveries: " + response.data.summary.recovered);
    var deathToll = $("<h2>").text("World wide total deaths: " + response.data.summary.deaths);
    $(".location").append(activeCases)
    $(".location").append(totalCases)    
    $(".location").append(totalRecovered)    
    $(".location").append(deathToll)
});

// Query for map
var mapTileQuery = {
	"async": true,
	"crossDomain": true,
	"url": "https://maptiles.p.rapidapi.com/local/osm/v1/3/6/3.png",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "maptiles.p.rapidapi.com",
		"x-rapidapi-key": "c73dfbc7ffmsh7f2ddc7cba39943p17cd81jsnd820b7f1d342"
	}
}











// "Map data © OpenStreetMap contributors." -- required on page to give proper credit
// $.ajax(mapTileQuery).done(function (response) {
// 	console.log(response);
// });

// var mapQuery = {
//     "url": "https://bing.com/maps/default.aspx?cp=37.814692~-122.477339&style=o&lvl=1&dir=0&scene=1140291",
//     "method": "GET"
// }
// $.ajax(mapQuery).done(function (response) {
//     console.log(response)
// })



// Add news search