
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
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
	    zoom: 10,
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
}

function addMarker(location) {
	  var marker = new google.maps.Marker({
	    position: location,
	    map: map
	  });
	  markers.push(marker);
	  setMapOnAll();
}

function setMapOnAll() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
    console.log(markers[i].position.lat);
  }
}



function swipeLeft(){


}

function swipeRight(){
	
}



