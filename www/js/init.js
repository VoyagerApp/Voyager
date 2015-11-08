(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


var map;
var markers=[];


function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 37.77, lng: -122.42},
	    zoom: 8,
	    disableDefaultUI: true,
	    zoomControl: true,
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
	    addMarker(e.latLng);
	});
}

function addMarker(location) {
	  var marker = new google.maps.Marker({
	    position: location,
	    map: map
	  });
	  markers.push(marker);
	  setMapOnAll();
}

function btnaddmarker(){
	var myLatLng1 = {lat: -25.363, lng: 131.044};
	var myLatLng2 = {lat: -25.363, lng: 10.044};
  	var marker1 = new google.maps.Marker({
	    position: myLatLng1,
	    map: map
	});
	var marker2 = new google.maps.Marker({
	    position: myLatLng2,
	    map: map
	});

	markers.push(marker1);
	markers.push(marker2);
	setMapOnAll();
}

function setMapOnAll() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
    console.log(markers[i].position.lat);
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


function dropFlightPathPins(){
	var marker = new google.maps.Marker({
	      position: new google.maps.LatLng(-122.379128, 37.623891),
	      map: map
	});

	var marker = new google.maps.Marker({
	      position: new google.maps.LatLng(55.365705, 25.253398),
	      map: map
	});

}
*/

