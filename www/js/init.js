(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

var markers = [];
var map;
var cityAirports = [
    {
        name: "San Francisco",
        airport: "SFO",
        position: {lat: 37.7739, lng: -122.431}
    },
    {
        name: "Dubai",
        airport: "DXB",
        position: {lat: 25.2486, lng: 55.352}
    },
    {
        name: "San Jose",
        airport: "SJC",
        position: {lat: 37.363, lng: 121.929}
    }
];


function initMap() {
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
}

function addMarker(location) {
	  var marker = new google.maps.Marker({
	    position: location,
	    map: map
	  });
	  markers.push(marker);
	  marker.setMap(map);
}

function submitMarker() {
  	if (markers.length < 2) {
	  	alert("Drop at least 2 pins");
	  	return;
  	}

  	var departureCity;
  	var arrivalCity;
  	/*
  	switch () {

  	}

  	switch () {
  		
  	}
  	*/

	for (var i = 0; i < markers.length - 1; i++) {
	  var line = new google.maps.Polyline({
	    path: [
	        new google.maps.LatLng(markers[i].position.lat(), markers[i].position.lng()),
	        new google.maps.LatLng(markers[i+1].position.lat(), markers[i+1].position.lng())
	    ],
	    strokeColor: "#C0392B",
	    strokeOpacity: 0.7,
	    strokeWeight: 1,
	    geodesic: true,
	    map: map
	  });
	}
}

