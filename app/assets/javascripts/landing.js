$(document).ready(function(){
if($('.locations.landing').length){
    var latField = document.getElementById('lat-field');
    var lngField = document.getElementById('lng-field');
    var saveButton = document.getElementById('save-button');
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        latField.value = lat;
        lngField.value = lng;
        
        // Mapbox setup
        mapboxgl.accessToken = 'pk.eyJ1Ijoic2FuamF5eXBhdGVsIiwiYSI6ImNpbHV4OHZ5ajAxaHl1ZGtzZ3BvZmJvOWgifQ.TACQQlF02mqCdzUWUKFy4g';
        var map = new mapboxgl.Map({
          container: 'your-location',
          style: 'mapbox://styles/sanjayypatel/ciqjnn3h80014bnncnkwv0i3a',
          center: [ lng, lat ],
          zoom: 16,
          interactive: false
        });

        // Add a red circle at current location
        map.on('load', function() {
          map.addSource("points", createPointsJSON(lng, lat));
          map.addLayer(createLayerJSON("points"));
        });


        // enable save button after location load.
        saveButton.removeAttribute('disabled');
      });
    } else {
      console.error("Could not access location data.");
    }
  }
});

var createPointsJSON = function(lng, lat){
  return {
            "type": "geojson",
            "data": {
              "type": "FeatureCollection",
              "features": [{
                  "type": "Feature",
                  "geometry": {
                      "type": "Point",
                      "coordinates": [ lng, lat ]
                  }
              }]
            }
          }
}

var createLayerJSON = function(source) {
  return {
      "id": "points",
      "type": "circle",
      "source": source,
      "paint": {
        "circle-radius": 8,
        "circle-color": "#db004c"

      }
  }
}
