var experiences = [];

function explore(lat, lng){



    if (explore !== "") {
        var experience = {
            price : null,
            duration: null,
            category: null
        };

        var range = 30
        var limit = 5
        var urll = 'http://dev.xola.com/api/experiences?geo=' + lat + '%2c' + lng + '&limit=5&sort=price[desc]',
        
            // &limit=5&sort=price[desc]

        $.ajax({

            url: urll,  
            type: 'GET',
            dataType: 'json',
            headers: {
                'Content-type': 'application/json',
                'X-API-Key':'pp1yvpos00okckkkko', 
            
            },

            success: function(data){
              
                console.log(data);
              /* 
                alert('success')
                 for (var i = 0; i < data.length; i++) {
                     experience.price = data.price;
                     experience.duration = data.duration;
                     experience.category = data.category;
                     experiences[i] = experience;
                     console.log(experiences[i]);
                }

                alert(data);
           */     
            },
                 
            error: function (XMLHttpRequest, textStatus, errorThrown) {
             alert(XMLHttpRequest + " " + textStatus + " " + errorThrown);
             alert(urll);
            }
        });
}

       
        return true;
}

explore(37.7833,122.4167);
