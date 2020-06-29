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
$.ajax(covidQuery).done(function (response) {
    console.log(response);
    console.log(response.data.summary.deaths)
    var deathToll = $("<h2>").text("total deaths: " + response.data.summary.deaths);
    $("header").append(deathToll)
});





