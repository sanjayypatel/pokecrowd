$(document).ready(function(){
  var latField = document.getElementById('lat-field');
  if(latField !== null){
    var lngField = document.getElementById('lng-field');
    var saveButton = document.getElementById('save-button');
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        latField.value = position.coords.latitude;
        lngField.value = position.coords.longitude;
        saveButton.removeAttribute('disabled');
      });
    } else {
      console.log("no");
    }
  }
});
