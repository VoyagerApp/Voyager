 $(document).ready(function() {
    $('.modal-trigger').leanModal();
  });
 $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

var flights = [
	{
        fare: null,
        duration: null,
        dTime: null,
        number: null,
        layover: null,
        pins: []
    },
    {
        fare: null,
        duration: null,
        dTime: null,
        number: null,
        layover: null,
        pins: []
    }
];
var markers = [];
var map;
var flightPath = [];
var cityAirports = [
    {
        name: "San Francisco",
        airport: "SFO",
        position: {lat: 37.7833, lng: -122.4167}
    },
    {
        name: "Dubai",
        airport: "DXB",
        position: {lat: 25.2486, lng: 55.352}
    },
    {
        name: "Doha",
        airport: "DOH",
        position: {lat: 25.287, lng: 51.533}
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

destination("economy");

function addMarker(location) {
	  var marker = new google.maps.Marker({
	    position: location,
	    map: map
	  });
	  markers.push(marker);
	  marker.setMap(map);
}

function submitMarker() {
	for (var i = 0; i < markers.length - 1; i++) {
	  flightPath[i] = new google.maps.Polyline({
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

function clearOverlays() {
  for (var i = 0; i < markers.length; i++ ) {
    markers[i].setMap(null);
  }
  markers = [];
}

function destination(flightClass) {
    if (destination !== "") {
        $.ajax({
            url: 'https://ec2-54-77-6-21.eu-west-1.compute.amazonaws.com:8143/flightavailability/1.0/?FlightDate=12%2F12%2F15&Origin=SFO&Destination=DBX&Class=economy',  
            type: 'GET',
            dataType: 'json',
            headers: {
                'Authorization':'Bearer 77b9d6ee26fd8f616e7c9226234eba1', 
            },
    
            success: function(data) {
                 console.log(data);
                 flights[0].fare = data.FlightAvailabilityList[0].FlightFare;
                 flights[0].duration = data.FlightAvailabilityList[0].Duration;
                 flights[0].dTime = data.FlightAvailabilityList[0].FlightDateTime;
                 flights[0].number = data.FlightAvailabilityList[0].FlightNo;
                 flights[0].pins[0] = cityAirports[0].position;
                 flights[0].layover = data.FlightAvailabilityList[0].TransitsStations.TransitsStation[0];
                 if (flights[0].layover == "Doha") {
                    flights[0].pins[1] = cityAirports[2].position;
                    flights[0].pins[2] = cityAirports[1].position;
                }
                else {
                 	flights[0].pins[1] = cityAirports[1].position;
             	}
             	 flights[1].fare = "1200AED";
                 flights[1].duration = "12h";
                 flights[1].dTime = "09:12";
                 flights[1].number = "EK545";
                 flights[1].pins[0] = cityAirports[0].position;
                 flights[1].layover = "";
                 if (flights[1].layover == "Doha") {
                    flights[1].pins[1] = cityAirports[2].position;
                    flights[1].pins[2] = cityAirports[1].position;
                }
                else {
                 	flights[1].pins[1] = cityAirports[1].position;
             	}

                $('#flight1No').html("Flight: " + flights[0].number);
                $('#flight1Dep').html("departs " + flights[0].dTime);
                $('#flight1Dur').html("duration: " + flights[0].duration);
                if (flights[0].layover == "")
                    $('#flight1Lay').html("Layover: none");
                else {
                    $('#flight1Lay').html("Layover: " + flights[0].layover);
                  }

                $('#flight2No').html(flights[1].number);
                $('#flight2Dep').html("departs " + flights[1].dTime);
                $('#flight2Dur').html("duration: " + flights[1].duration);
                if (flights[1].layover == "")
                    $('#flight2Lay').html("Layover: none");
                else
                    $('#flight2Lay').html("Layover: " + flights[1].layover);


                $('#flight1').click(function() {
                	clearOverlays();
                	if (flightPath[0])
                		flightPath[0].setMap(null);
                	if (flightPath[1])
                		flightPath[1].setMap(null);
                    for (var i = 0; i < flights[0].pins.length; i++) {
                        addMarker(flights[0].pins[i]);
                    }
                    submitMarker();
                });
                $('#flight2').click(function() {
                	clearOverlays();
                	if (flightPath[0])
                		flightPath[0].setMap(null);
                	if (flightPath[1])
                		flightPath[1].setMap(null);
                    for (var i = 0; i < flights[1].pins.length; i++) {
                        addMarker(flights[1].pins[i]);
                    }
                    submitMarker();
                });

            },
                 
            error: function (XMLHttpRequest, textStatus, errorThrown) {
             console.log('error');
            }
        });
    }
    else {}   
    return true;
}

function destinationMobile() {
    if (destination !== "") {
    	/*
        var flightData = {
            fare: null,
            duration: null,
            dTime: null,
            number: null,
            layover: null,
            pins: []
        };
        */

        var selectedClass = $('#selectedClass').text();

        $.ajax({
            url: 'https://ec2-54-77-6-21.eu-west-1.compute.amazonaws.com:8143/flightavailability/1.0/?FlightDate=12%2F12%2F15&Origin=SFO&Destination=DBX&Class=economy',  
            type: 'GET',
            dataType: 'json',
            headers: {
                'Authorization':'Bearer 644cd73cc87f5720e9b93eaada4de65', 
            },
            
            success: function(data) {
                 flights[0].fare = data.FlightAvailabilityList[0].FlightFare;
                 flights[0].duration = data.FlightAvailabilityList[0].Duration;
                 flights[0].dTime = data.FlightAvailabilityList[0].FlightDateTime;
                 flights[0].number = data.FlightAvailabilityList[0].FlightNo;
                 flights[0].pins[0] = cityAirports[0].position;
                 flights[0].layover = data.FlightAvailabilityList[0].TransitsStations.TransitsStation[0];
                 if (flights[0].layover == "Doha") {
                    flights[0].pins[1] = cityAirports[2].position;
                    flights[0].pins[2] = cityAirports[1].position;
                }
                else {
                 	flights[1].pins[1] = cityAirports[1].position;
             	}
             	 flights[1].fare = "1200AED";
                 flights[1].duration = "12h";
                 flights[1].dTime = "09:12";
                 flights[1].number = "EK545";
                 flights[1].pins[0] = cityAirports[0].position;
                 flights[1].layover = "";
                 if (flights[1].layover == "Doha") {
                    flights[1].pins[1] = cityAirports[2].position;
                    flights[1].pins[2] = cityAirports[1].position;
                }
                else {
                 	flights[1].pins[1] = cityAirports[1].position;
             	}

                $('#flight1No').html("Flight: " + flights[0].number);
                $('#flight1Dep').html("departs " + flights[0].dTime);
                $('#flight1Dur').html("duration: " + flights[0].duration);
                if (flights[0].layover == "")
                    $('#flight1Lay').html("Layover: none");
                else
                    $('#flight1Lay').html("Layover " + flights[0].layover);

                console.log($('#flight2Lay').html("Layover: " + flights[0].layover));
                $('#flight2No').html(flights[1].number);
                $('#flight2Dep').html("departs " + flights[1].dTime);
                $('#flight2Dur').html("duration: " + flights[1].duration);
                if (flights[1].layover == "")
                    $('#flight2Lay').html("Layover: none");
                else
                    $('#flight2Lay').html("Layover: " + flights[1].layover);

                $('#flight1').click(function() {
                	clearOverlays();
                	if (flightPath[0])
                		flightPath[0].setMap(null);
                	if (flightPath[1])
                		flightPath[1].setMap(null);
                    for (var i = 0; i < flights[0].pins.length; i++) {
                        addMarker(flights[0].pins[i]);
                    }
                    submitMarker();
                });
                $('#flight2').click(function() {
                	clearOverlays();
                	if (flightPath[0])
                		flightPath[0].setMap(null);
                	if (flightPath[1])
                		flightPath[1].setMap(null);
                    for (var i = 0; i < flights[1].pins.length; i++) {
                        addMarker(flights[1].pins[i]);
                    }
                    submitMarker();
                });

            },
                 
            error: function (XMLHttpRequest, textStatus, errorThrown) {
             alert('error');
            }
        });
    }
    else {}   
    return true;
}