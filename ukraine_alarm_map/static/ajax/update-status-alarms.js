// var template = document.getElementById('alarms');

// var element = document.getElementById('div-alarms');

// function renderTemplate(template, data) {
//     var renderedTemplate = Mustache.render(template, data);
//     return renderedTemplate;
// };

// function updateContent(element, content) {
//     element.innerHTML = content;
// };

function get_alarms() {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'get_alarms/', true);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status <= 400) {
            // Success server answer processing
            var data = JSON.parse(xhr.responseText);     
            console.log(data.all_alarms)
            return data.all_alarms
            
            
            // var alarms = data.all_alarms;

            // var renderedTemplate = renderTemplate(template, alarms);

            // updateContent(element, renderedTemplate);

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

setInterval(get_alarms, 15000);

var alarm = get_alarms();

var g = document.getElementById('g');

var pathElements = g.getElementsByTagName('path')

Array.from(pathElements).forEach(function(path) {
    var id = path.getAttribute('id');
    var title = path.getAttribute('title');

    if (alarm["Запорізька"] === '🟢') {
        path.style.fill = 'red'
      } else if (alarm.Запорізька === '🔴') {
        path.style.fill = 'green'

    }

})


