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

            // var alarms = data.all_alarms;

            // var renderedTemplate = renderTemplate(template, alarms);
            
            // updateContent(element, renderedTemplate);

            var all_alarms = data.all_alarms;
            
            console.log(all_alarms);
              
            for (var city in all_alarms) {
                var i = all_alarms[city];
                if (city === "Запорізька" && i === '🟢') {
                    document.getElementById('UA-23').style.fill = "green";
                } else if (city === "Запорізька" && i === '🔴') {
                    document.getElementById('UA-23').style.fill = "red";
                };
                if (city === "Донецька" && i === '🟢') {
                    document.getElementById('UA-14').style.fill = "green";
                } else if (city === "Донецька" && i === '🔴') {
                    document.getElementById('UA-14').style.fill = "red";
                };
                if (city === "Харківська" && i === '🟢') {
                    document.getElementById('UA-63').style.fill = "green";
                } else if (city === "Харківська" && i === '🔴') {
                    document.getElementById('UA-63').style.fill = "red";
                };
                if (city === "Тернопільська" && i === '🟢') {
                    document.getElementById('UA-61').style.fill = "green";
                } else if (city === "Тернопільська" && i === '🔴') {
                    document.getElementById('UA-61').style.fill = "red";
                };
                if (city === "Рівненська" && i === '🟢') {
                    document.getElementById('UA-56').style.fill = "green";
                } else if (city === "Рівненська" && i === '🔴') {
                    document.getElementById('UA-56').style.fill = "red";
                };
                if (city === "Львівська" && i === '🟢') {
                    document.getElementById('UA-46').style.fill = "green";
                } else if (city === "Львівська" && i === '🔴') {
                    document.getElementById('UA-46').style.fill = "red";
                };
                if (city === "Закарпатська" && i === '🟢') {
                    document.getElementById('UA-21').style.fill = "green";
                } else if (city === "Закарпатська" && i === '🔴') {
                    document.getElementById('UA-21').style.fill = "red";
                };
                if (city === "Волинська" && i === '🟢') {
                    document.getElementById('UA-07').style.fill = "green";
                } else if (city === "Волинська" && i === '🔴') {
                    document.getElementById('UA-07').style.fill = "red";
                };
                if (city === "Хмельницька" && i === '🟢') {
                    document.getElementById('UA-68').style.fill = "green";
                } else if (city === "Хмельницька" && i === '🔴') {
                    document.getElementById('UA-68').style.fill = "red";
                };
                if (city === "Херсонська" && i === '🟢') {
                    document.getElementById('UA-65').style.fill = "green";
                } else if (city === "Херсонська" && i === '🔴') {
                    document.getElementById('UA-65').style.fill = "red";
                };
                if (city === "Кіровоградська" && i === '🟢') {
                    document.getElementById('UA-35').style.fill = "green";
                } else if (city === "Кіровоградська" && i === '🔴') {
                    document.getElementById('UA-35').style.fill = "red";
                };
                if (city === "Київська" && i === '🟢') {
                    document.getElementById('UA-32').style.fill = "green";
                } else if (city === "Київська" && i === '🔴') {
                    document.getElementById('UA-32').style.fill = "red";
                };
                if (city === "м.Київ" && i === '🟢') {
                    document.getElementById('UA-30').style.fill = "green";
                } else if (city === "м.Київ" && i === '🔴') {
                    document.getElementById('UA-30').style.fill = "red";
                };
                if (city === "Миколаївська" && i === '🟢') {
                    document.getElementById('UA-48').style.fill = "green";
                } else if (city === "Миколаївська" && i === '🔴') {
                    document.getElementById('UA-48').style.fill = "red";
                };
                if (city === "Одеська" && i === '🟢') {
                    document.getElementById('UA-51').style.fill = "green";
                } else if (city === "Одеська" && i === '🔴') {
                    document.getElementById('UA-51').style.fill = "red";
                };
                if (city === "Дніпропетровська" && i === '🟢') {
                    document.getElementById('UA-12').style.fill = "green";
                } else if (city === "Дніпропетровська" && i === '🔴') {
                    document.getElementById('UA-12').style.fill = "red";
                };
                if (city === "Сумська" && i === '🟢') {
                    document.getElementById('UA-59').style.fill = "green";
                } else if (city === "Сумська" && i === '🔴') {
                    document.getElementById('UA-59').style.fill = "red";
                };
                if (city === "Чернігівська" && i === '🟢') {
                    document.getElementById('UA-74').style.fill = "green";
                } else if (city === "Чернігівська" && i === '🔴') {
                    document.getElementById('UA-74').style.fill = "red";
                };
                if (city === "Чернівецька" && i === '🟢') {
                    document.getElementById('UA-77').style.fill = "green";
                } else if (city === "Чернівецька" && i === '🔴') {
                    document.getElementById('UA-77').style.fill = "red";
                };
                if (city === "Кіровоградська" && i === '🟢') {
                    document.getElementById('UA-35').style.fill = "green";
                } else if (city === "Кіровоградська" && i === '🔴') {
                    document.getElementById('UA-35').style.fill = "red";
                };
                if (city === "Житомирська" && i === '🟢') {
                    document.getElementById('UA-18').style.fill = "green";
                } else if (city === "Житомирська" && i === '🔴') {
                    document.getElementById('UA-18').style.fill = "red";
                };
                if (city === "Черкаська" && i === '🟢') {
                    document.getElementById('UA-71').style.fill = "green";
                } else if (city === "Черкаська" && i === '🔴') {
                    document.getElementById('UA-71').style.fill = "red";
                };
                if (city === "Запорізька" && i === '🟢') {
                    document.getElementById('UA-23').style.fill = "green";
                } else if (city === "Запорізька" && i === '🔴') {
                    document.getElementById('UA-23').style.fill = "red";
                };
                if (city === "Полтавська" && i === '🟢') {
                    document.getElementById('UA-53').style.fill = "green";
                } else if (city === "Полтавська" && i === '🔴') {
                    document.getElementById('UA-53').style.fill = "red";
                };
                if (city === "Черкаська" && i === '🟢') {
                    document.getElementById('UA-71').style.fill = "green";
                } else if (city === "Черкаська" && i === '🔴') {
                    document.getElementById('UA-71').style.fill = "red";
                };
                if (city === "Івано-Франківська" && i === '🟢') {
                    document.getElementById('UA-26').style.fill = "green";
                } else if (city === "Івано-Франківська" && i === '🔴') {
                    document.getElementById('UA-26').style.fill = "red";
                };
                if (city === "Вінницька" && i === '🟢') {
                    document.getElementById('UA-05').style.fill = "green";
                } else if (city === "Вінницька" && i === '🔴') {
                    document.getElementById('UA-05').style.fill = "red";
                };
            
            };

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





