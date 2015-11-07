(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space





function initMap() {
  	var map;
	map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 37.77, lng: -122.42},
	    zoom: 8
	});

	// Try HTML5 geolocation.
	if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position) {
	      var pos = {
	        lat: position.coords.latitude,
	        lng: position.coords.longitude
	      };

	      map.setCenter(pos);
	    });
	}
	else {
	    // Browser doesn't support Geolocation
	}

	google.maps.event.addListener(map, 'click', function(e) {
	    placeMarker(e.latLng, map);
	});

	function placeMarker(position, map) {
	    var marker = new google.maps.Marker({
	      position: position,
	      map: map
	    });  
	    map.panTo(position);
	}

}
/*
  map.addListener('center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });
*/