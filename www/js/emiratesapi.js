alert('test');

var flights = [];
var flightsSize = 0;
​
// ​$.ajax({
//         url: 'https://dev.xola.com/api/experiences',
//         beforeSend: function(xhr) {
//              xhr.setRequestHeader("X-API-KEY", "hBehcieqIALQKz-dAUWL4fQ1CsGE67N9hh_9WV53z48")
//              xhr.setRequestHeader("Content-type", "application/json")
//         }, success: function(data){
//             alert(data);
//             //process the JSON data etc
//         },
//                  //callback();
                 
//             error: function (XMLHttpRequest, textStatus, errorThrown) {
//              alert('error');
//             }
// });

function destination(flightClass){
​
    if (destination !== "") {
        var flightData = {
            fare: null,
            duration: null,
            dTime: null,
            number: null,
            layover: null
        };
        $.ajax({
​
            url: 'https://ec2-54-77-6-21.eu-west-1.compute.amazonaws.com:8143/flightavailability/1.0/?FlightDate=12%2F12%2F12&Origin=SFO&Destination=DXB&Class=' + flightClass,  
            type: 'GET',
            dataType: 'json',
            headers: {
                'Authorization':'Bearer 644cd73cc87f5720e9b93eaada4de65', 
            },
            
            success: function(data){
                 for (var i = 0; i < data.FlightAvailabilityList.length; i++) {
                     flightData.fare = data.FlightAvailabilityList[i].FlightFare;
                     flightData.duration = data.FlightAvailabilityList[i].Duration;
                     flightData.dTime = data.FlightAvailabilityList[i].FlightDateTime;
                     flightData.number = data.FlightAvailabilityList[i].FlightNo;
                     flightData.layover = data.FlightAvailabilityList[i].TransitsStations.TransitsStation[0];
                     flights[i] = flightData;
                     console.log(flights[i]);
                }
                flightsSize = FlightAvailabilityList.length;
            },
                 //callback();
                 
            error: function (XMLHttpRequest, textStatus, errorThrown) {
             alert('error');
            }
        });
    }
    else {}   
    return true;
}