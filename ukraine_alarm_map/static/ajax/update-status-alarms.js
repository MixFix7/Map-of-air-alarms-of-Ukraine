var template = document.getElementById('alarms').innerHTML;
var element = document

function get_alarms() {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'get_alarms/', true);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status <= 400) {
            // Success server answer processing
            var responce = JSON.parse(xhr.responseText);     
            console.log(responce.all_alarms);
        } else {
            console.error(xhr.statusText)
        }
    };

    xhr.onerror = function() {
        console.error("Error response");
    };

    xhr.send();

};


get_alarms();

setInterval(get_alarms(), 15000);



