function loadstatus() {
    $.ajax({
    url: "http://127.0.0.1:5000/wc"
    }).then(function(data) {
        var json = JSON.parse(data);
        
        if (json.park1 == 1) {
            $('#park1').html('P1 is available!'); 
            $("#park1").css({"backgroundColor": "#81BC5A"});
        }
        else {
            $('#park1').html("<img src='images/car.png' class='parkingcar' />&nbsp;P1 is occupied");
            $("#park1").css({"backgroundColor": "#D1392C"});
        }
        
        if (json.park2 == 1) {
            $('#park2').html('P2 is available!'); 
            $("#park2").css({"backgroundColor": "#81BC5A"});
        }
        else {
            $('#park2').html("<img src='images/car.png' class='parkingcar' />&nbsp;P2 is occupied");
            $("#park2").css({"backgroundColor": "#D1392C"});
        }
        
        if (json.park3 == 1) {
            $('#park3').html('P3 is available!'); 
            $("#park3").css({"backgroundColor": "#81BC5A"});
        }
        else {
            $('#park3').html("<img src='images/car.png' class='parkingcar' />&nbsp;P3 is occupied");
            $("#park3").css({"backgroundColor": "#D1392C"});
        }
        
        if (json.park4 == 1) {
            $('#park4').html('P4 is available!'); 
            $("#park4").css({"backgroundColor": "#81BC5A"});
        }
        else {
            $('#park4').html("<img src='images/car.png' class='parkingcar' />&nbsp;P4 is occupied");
            $("#park4").css({"backgroundColor": "#D1392C"});
        }
        
        $('#lastupdate').html("Last Update:"+new Date($.now())); 
        
        
    });
    };
