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
// pulls data from covid api and appends death toll to header
$.ajax(covidQuery).done(function (response) {
    console.log(response);
    console.log(response.data.summary.deaths)
    var deathToll = $("<h2>").text(region + " total deaths: " + response.data.summary.deaths);
    $("header").append(deathToll)
});
// NYT Query
function buildNYTQuery() {
    // queryURL is the url we'll use to query the API
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  
    // Begin building an object to contain our API call's query parameters
    // Set the API key
    var queryParams = { "api-key": "4fa5dc59-0017-4c4f-a967-ab6b52b33d2d" };
  
    // Grab text the user typed into the search input, add to the queryParams object
    queryParams = "covid"
  
    // Logging the URL so we have access to it for troubleshooting
    console.log("---------------\nURL: " + queryURL + "\n---------------");
    console.log(queryURL + $.param(queryParams));
    return queryURL + $.param(queryParams);
  }
buildNYTQuery()
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(console.log(response));
