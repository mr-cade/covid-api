//leaflet.js
//Displaying a map.


var mymap = L.map('mapid').setView([39.419220, -111.950684], 4);


L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=wnclmoF7O9yOOZ4B4z7P',{
    attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',


}).addTo(mymap);

//Ajax call to get the covid data.
$.ajax({
    url: "https://covidtracking.com/api/v1/states/current.json",
    method: "GET"
  })
  .then(function(response) {
    console.log(response);
  


 states={'Arizona':response[4].positive,'Alabama':response[1].positive,'Alaska':response[0].positive,'Arkansas':response[3].positive, 'California':response[5].positive,
        'Colorado':response[6].positive,'Connecticut':response[7].positive,'Delaware':response[9].positive,  'Florida':response[10].positive , 'Georgia':response[11].positive,  'Hawaii' :response[13].positive,
        'Idaho':response[15].positive,  'Illinois':response[16].positive,'Indiana' :response[17].positive,  'Iowa':response[14].positive, 'Kansas' :response[18].positive,
        'Kentucky':response[19].positive, 'Louisiana':response[20].positive,    'Maine':response[23].positive,'Maryland':response[22].positive,  'Massachusetts':response[21].positive, 'Michigan':response[24].positive, 
        'Minnesota':response[25].positive,  'Mississippi':response[28].positive,  'Missouri':response[26].positive, 'Montana':response[29].positive,
        'Nebraska':response[32].positive, 'Nevada':response[36].positive,'New Hampshire':response[33].positive, 'New Mexico':response[35].positive, 'New York':response[37].positive,
        'North Carolina':response[30].positive,'North Dakota':response[31].positive,'Ohio':response[38].positive,'Oklahoma':response[39].positive,'Oregon':response[40].positive,
        'Pennsylvania':response[41].positive,'Rhode Island':response[43].positive,'South Carolina':response[44].positive, 'South Dakota':response[45].positive,'Tennessee':response[46].positive,
        'Texas':response[47].positive,'Utah':response[48].positive,'Vermont':response[51].positive, 'Virginia':response[50].positive,  'Washington':response[52].positive, 'West Virginia':response[54].positive,
        'Wisconsin':response[53].positive,'Wyoming' :response[55].positive,};
 
 
 geojson = L.geoJson(usadata, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(mymap);




 var usstates =[{'name':'Alabama','cases':response[1].positive},{'Alaska':response[0].positive},

 {'Arizona':response[4].positive},          {'Arkansas':response[2].positive },         {'California':response[5].positive},

 
 {'name':'Colorado','cases':response[6].positive},         {'name':'Connecticut', 'cases':response[5].positive},      {'name':'Delaware', },
 
 {'name':'Florida'},          {'name':'Georgia' },          {'name':'Hawaii' },
 
 {'name':'Idaho',},            {'name':'Illinois'},         {'name':'Indiana'},
 
 {'name':'Iowa',},             {'name':'Kansas', },           {'name':'Kentucky', },
 
 {'name':'Louisiana'},        {'name':'Maine'},            {'name':'Maryland'},
 
 {'name':'Massachusetts',},    {'name':'Michigan', },         {'name':'Minnesota', },
 
 {'name':'Mississippi',},      {'name':'Missouri', },         {'name':'Montana'},
 
 {'name':'Nebraska'},         {'name':'Nevada', },           {'name':'New Hampshire', },
 
 {'name':'New Jersey', },       {'name':'New Mexico', },       {'name':'New York', },
 
 {'name':'North Carolina',},   {'name':'North Dakota'},     {'name':'Ohio',},
 
 {'name':'Oklahoma'},         {'name':'Oregon'},           {'name':'Pennsylvania'},
 
 {'name':'Rhode Island'},     {'name':'South Carolina'},   {'name':'South Dakota'},
 
 {'name':'Tennessee',},        {'name':'Texas'},            {'name':'Utah'},
 
 {'name':'Vermont'},          {'name':'Virginia'},         {'name':'Washington'},
 
 {'name':'West Virginia'},    {'name':'Wisconsin'},        {'name':'Wyoming'}
 
];

 var count = usstates.length;
 for (i=0; i<count; i++){
   
   
 }
 console.log(usstates[0]);
 
  });
 var states;


  function getColor(d) { 
    return d > 100000 ? '#800026' :
           d > 50000  ? '#BD0026' :
           d > 20000 ? '#E31A1C' :
           d > 10000  ? '#FC4E2A' :
           d > 5000   ? '#FD8D3C' :
           d > 2000   ? '#FEB24C' :
           d > 1000   ? '#FED976' :
                      '#FFEDA0';
}




function style(feature) {
    return {
        fillColor: getColor(states[feature.properties.name]), 
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}


function highlightFeature(e) {
    var layer = e.target;
    info.update(layer.feature.properties);
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
    info.update();
    geojson.resetStyle(e.target);
}

function zoomToFeature(e) {
    mymap.fitBounds(e.target.getBounds());
}


function onEachFeature(feature, layer) {
    layer.on({
        click: highlightFeature,
        mouseout: resetHighlight,
        // click: zoomToFeature
    });
}


  var info = L.control();

  info.onAdd = function (map) {
      this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
      this.update();
      return this._div;
  };
  
  // method that we will use to update the control based on feature properties passed
  info.update = function (props) {
      this._div.innerHTML = '<h4> Confirmed Cases</h4>' +  (props ?
          '<b>' +props.name + '</b><br />' + Intl.NumberFormat().format(states[props.name]) + ' cases'
          : 'Click on a state');
  };
  
  info.addTo(mymap);
  



























































