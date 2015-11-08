// var flights = [];
// var flightsSize = 0;

// function destination(flightClass){

//     if (destination !== "") {
//         var flightData = {
//             fare: null,
//             duration: null,
//             dTime: null,
//             number: null,
//             layover: null
//         };
//         $.ajax({

//             url: 'https://ec2-54-77-6-21.eu-west-1.compute.amazonaws.com:8143/flightavailability/1.0/?FlightDate=12%2F12%2F12&Origin=SFO&Destination=DXB&Class=' + flightClass,  
//             type: 'GET',
//             dataType: 'json',
//             headers: {
//                 'Authorization':'Bearer 644cd73cc87f5720e9b93eaada4de65', 
//             },
        
//             success: function(data){
//                  for (var i = 0; i < data.FlightAvailabilityList.length; i++) {
//                      flightData.fare = data.FlightAvailabilityList[i].FlightFare;
//                      flightData.duration = data.FlightAvailabilityList[i].Duration;
//                      flightData.dTime = data.FlightAvailabilityList[i].FlightDateTime;
//                      flightData.number = data.FlightAvailabilityList[i].FlightNo;
//                      flightData.layover = data.FlightAvailabilityList[i].TransitsStations.TransitsStation[0];
//                      flights[i] = flightData;
//                      console.log(flights[i]);
//                 }
//                 flightsSize = FlightAvailabilityList.length;
//             },
//                  //callback();
           
//             error: function (XMLHttpRequest, textStatus, errorThrown) {
//              alert('error');
//             }
//         });
//     }
//     else {}   
//     return true;
// }
// var flights = [];
// var flightsSize = 0;

// function destination(flightClass){

//     if (destination !== "") {
//         var flightData = {
//             fare: null,
//             duration: null,
//             dTime: null,
//             number: null,
//             layover: null
//         };
//         $.ajax({

//             url: 'https://ec2-54-77-6-21.eu-west-1.compute.amazonaws.com:8143/flightavailability/1.0/?FlightDate=12%2F12%2F12&Origin=SFO&Destination=DXB&Class=' + flightClass,  
//             type: 'GET',
//             dataType: 'json',
//             headers: {
//                 'Authorization':'Bearer 644cd73cc87f5720e9b93eaada4de65', 
//             },
        
//             success: function(data){
//                  for (var i = 0; i < data.FlightAvailabilityList.length; i++) {
//                      flightData.fare = data.FlightAvailabilityList[i].FlightFare;
//                      flightData.duration = data.FlightAvailabilityList[i].Duration;
//                      flightData.dTime = data.FlightAvailabilityList[i].FlightDateTime;
//                      flightData.number = data.FlightAvailabilityList[i].FlightNo;
//                      flightData.layover = data.FlightAvailabilityList[i].TransitsStations.TransitsStation[0];
//                      flights[i] = flightData;
//                      console.log(flights[i]);
//                 }
//                 flightsSize = FlightAvailabilityList.length;
//             },
//                  //callback();
           
//             error: function (XMLHttpRequest, textStatus, errorThrown) {
//              alert('error');
//             }
//         });
//     }
//     else {}   
//     return true;
// }

//  $(document).ready(function() {
//     xola();
//   });
var ids = ["4f9ee38f536e862e0c000024", "4fe0fcba536e86cc4400001a", "4f872460536e86a21d00002a"  ]
 $(document).ready(function() {
    for (i = 0; i < 3; i++) {
        xola(ids[i]);
    }
  });

function xola(id){
        $.ajax({
            url: 'https://dev.xola.com/api/experiences/' + id,  
            type: 'GET',
            dataType: 'json',
            headers: {
                'Content-type':'application/json', 
            },
            
            success: function(data){
                 console.log(data.desc);
                  $('#adventureDesc' + (id+1)).html(data.desc);
            },
                 //callback();
                 
            error: function (XMLHttpRequest, textStatus, errorThrown) {
             alert('error');
            }
        });
}
// function xola(){
//         $.ajax({
//             url: 'https://dev.xola.com/api/experiences',  
//             type: 'GET',
//             dataType: 'json',
//             headers: {
//                 'Content-type': 'application/json',
//                 'X-API-Key':'pp1yvpos00okckkkko', 
//             },
            
//             success: function(data){
//                  console.log(data);
//             },
//                  //callback();
                 
//             error: function (XMLHttpRequest, textStatus, errorThrown) {
//              alert('error');
//             }
//         });
//     }