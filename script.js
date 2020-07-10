var localArr = []
var activeCases = [];
var deaths = [];
var recoveries = [];
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
        var totalRecovered = $("<p style='color: green'>").text("Total recoveries: " + recoveredPath);
        var deathToll = $("<p style='color: red'>").text("Total deaths: " + deathPath);
        
        // add stats to DOM
        $(".location").text(region);
        $(".location").append(activeCases);
        $(".location").append(totalCases);
        $(".location").append(totalRecovered);    
        $(".location").append(deathToll);
    });
    
    function saveSearch () {
        // creates object and saves to local storage
        var regionName = $("#region").val()
        console.log(regionName);
        var regionSearch = {
            region : regionName
          }
          localArr.push(regionSearch)
          localStorage.setItem("regionSearch", JSON.stringify(localArr))
    }
    saveSearch();
    $("#region").val("")
    $(".reset").attr({
        "Placeholder": "Region"
    })
});

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
    var activeCases = $("<h4>").text("Active cases: "+ activePath);
    var totalCases = $("<h4>").text("Total cases: " + totalPath);
    var totalRecovered = $("<h4 style='color: green'>").text("Total recoveries: " + recoveredPath);
    var deathToll = $("<h4 style='color: red'>").text("Total deaths: " + deathPath);
    
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
    objectData = response.data["2020-01-22"].active_cases;
    activeCases.push(objectData);
    objectData = response.data["2020-02-22"].active_cases;
    activeCases.push(objectData);
    objectData = response.data["2020-03-22"].active_cases;
    activeCases.push(objectData);
    objectData = response.data["2020-04-22"].active_cases;
    activeCases.push(objectData);
    objectData = response.data["2020-05-22"].active_cases;
    activeCases.push(objectData);
    objectData = response.data["2020-06-22"].active_cases;
    activeCases.push(objectData);
    objectData = response.data["2020-07-08"].active_cases;
    activeCases.push(objectData);
    console.log(activeCases);
    objectData = response.data["2020-01-22"].deaths;
    deaths.push(objectData);
    objectData = response.data["2020-02-22"].deaths;
    deaths.push(objectData);
    objectData = response.data["2020-03-22"].deaths;
    deaths.push(objectData);
    objectData = response.data["2020-04-22"].deaths;
    deaths.push(objectData);
    objectData = response.data["2020-05-22"].deaths;
    deaths.push(objectData);
    objectData = response.data["2020-06-22"].deaths;
    deaths.push(objectData);
    objectData = response.data["2020-07-08"].deaths;
    deaths.push(objectData);
    console.log(deaths);
    objectData = response.data["2020-01-22"].recovered;
    recoveries.push(objectData);
    objectData = response.data["2020-02-22"].recovered;
    recoveries.push(objectData);
    objectData = response.data["2020-03-22"].recovered;
    recoveries.push(objectData);
    objectData = response.data["2020-04-22"].recovered;
    recoveries.push(objectData);
    objectData = response.data["2020-05-22"].recovered;
    recoveries.push(objectData);
    objectData = response.data["2020-06-22"].recovered;
    recoveries.push(objectData);
    objectData = response.data["2020-07-08"].recovered;
    recoveries.push(objectData);
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

// News/chart toggle on click 
$("#trends").on("click", function() {
    if(newsBlock.style.display === "none") {
        newsBlock.style.display = "block";
    } else {
        newsBlock.style.display = "none";
    }
})

// chart

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Worldwide Deaths',
            data: deaths,
            backgroundColor: [
                'red'
            ],
        },
            
        {
            label: 'Worldwide Active Covid Cases',
            data: activeCases,
            backgroundColor: [
                'yellow'
            ],
        },
        {
            label: 'Worldwide Covid Recoveries',
            data: recoveries,
            backgroundColor: [
                'green'
            ],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                overlap: true,
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
});
var ctx = document.getElementById('deathChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Worldwide Covid Deaths',
            data: deaths,
            backgroundColor: [
                'red'
            ],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
});
var ctx = document.getElementById('recoveryChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Worldwide Covid Recoveries',
            data: recoveries,
            backgroundColor: [
                'green'
            ],
            
        }]
    },
    options: {
        scales: {
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
});