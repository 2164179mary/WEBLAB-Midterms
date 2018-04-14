function initMap(){
    var infoWindow;
    var location = {lat: 16.402333, lng:120.596007};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom:15, 
        center:location
    });
    
    infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent('You are here.');
                infoWindow.open(map);
                map.setCenter(pos);
            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
              });
     } else {
          handleLocationError(false, infoWindow, map.getCenter());
    }
}

      
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
}

