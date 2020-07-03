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
// pulls data from covid api and appends stats  to header
$.ajax(covidQuery).done(function (response) {
    // searched location
    console.log(response);
    
    // format numbers
    var activePath = new Intl.NumberFormat().format(response.data.summary.active_cases);
    var totalPath = new Intl.NumberFormat().format(response.data.summary.total_cases);
    var recoveredPath = new Intl.NumberFormat().format(response.data.summary.recovered);
    var deathPath = new Intl.NumberFormat().format(response.data.summary.deaths);

    // create stat elements
    var activeCases = $("<p>").text("Active cases: " + activePath);
    var totalCases = $("<p>").text("Total cases: " + totalPath);
    var totalRecovered = $("<p>").text("Total recoveries: " + recoveredPath);
    var deathToll = $("<p>").text("Total deaths: " + deathPath);
    
    // add stats to DOM
    $(".location").text(region);
    $(".location").append(activeCases);
    $(".location").append(totalCases);    
    $(".location").append(totalRecovered);    
    $(".location").append(deathToll);
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

    // format numbers
    var activePath = new Intl.NumberFormat().format(response.data.summary.active_cases);
    var totalPath = new Intl.NumberFormat().format(response.data.summary.total_cases);
    var recoveredPath = new Intl.NumberFormat().format(response.data.summary.recovered);
    var deathPath = new Intl.NumberFormat().format(response.data.summary.deaths);

    // world wide stat elements created
    var activeCases = $("<p>").text("Active cases: " + activePath);
    var totalCases = $("<p>").text("Total cases: " + totalPath);
    var totalRecovered = $("<p>").text("Total recoveries: " + recoveredPath);
    var deathToll = $("<p>").text("Total deaths: " + deathPath);
    
    // stats added to DOM
    $(".worldwide").append(activeCases);
    $(".worldwide").append(totalCases);  
    $(".worldwide").append(totalRecovered);    
    $(".worldwide").append(deathToll);
});

var historicalData = {
    "async": true,
    "crossDomain": true,
    "url": "https://coronavirus-map.p.rapidapi.com/v1/spots/summary",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-map.p.rapidapi.com",
        "x-rapidapi-key": "c73dfbc7ffmsh7f2ddc7cba39943p17cd81jsnd820b7f1d342"
    }
}
$.ajax(historicalData).done(function (response) {
	console.log(response);
});

/** NYT Article Search
 * @returns {string} URL for NYT API
 * @param {object} NYTData
 */
function buildQueryURL() {
    // queryURL is the url we'll use to query the API
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  
    // Begin building an object to contain our API call's query parameters
    // Set the API key
    var queryParams = { "api-key": "iv2BweW9nX6XL4Afc9BhmswYFp8lNxnT" };
  
    // sets to search for articles associated with covid
    queryParams.q = "covid"
  
    // Logging the URL so we have access to it for troubleshooting
    console.log("---------------\nURL: " + queryURL + "\n---------------");
    console.log(queryURL + $.param(queryParams));
    return queryURL + $.param(queryParams);
  }
  
var queryURL = buildQueryURL();
  
// Make the AJAX request to the API - GETs the JSON data at the queryURL.
$.ajax({
    url: queryURL,
    method: "GET"
}).done(function (response) {
    console.log(response);
    // append to DOM
    for (var i = 0; i < 10; i++) {
        var headlineEl = $("<h3 class='newsTitles'>").text(response.response.docs[i].headline.main)
        var abstractEl = $("<p>").text(response.response.docs[i].abstract)
        var bylineEl = $("<p class='newsByline'>").text(response.response.docs[i].byline.original)
        var readLink = $("<a href='" + response.response.docs[i].web_url + "'>" + "Read Here" + "</a>")
        $(".newsStories").append(headlineEl);
        $(".newsStories").append(abstractEl);
        $(".newsStories").append(bylineEl);
        $(".newsStories").append(readLink);
        $(".newsStories").append($("<br>"));
    }
})


// potential buttons
$("worldBtn").on("click", function() {

})
$("usBtn").on("click", function() {

})












// // Query for map
// var mapTileQuery = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://maptiles.p.rapidapi.com/local/osm/v1/3/6/3.png",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "maptiles.p.rapidapi.com",
// 		"x-rapidapi-key": "c73dfbc7ffmsh7f2ddc7cba39943p17cd81jsnd820b7f1d342"
// 	}
// }

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