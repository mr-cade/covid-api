// sets up covid query for later ajax pull
$("#searchBtn").on("click", function() {
    region = $("#region").val()

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
    // pulls searched region's data from covid api and appends stats to div
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
})

//   pull for worldwide covid stats
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
    objectData = response.data;
    var dataPoints = [];
    dataPoints.push(objectData);
    console.log(dataPoints);
    
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
    queryParams.q = "covid-19"
  
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

// chart

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Covid Trend',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
