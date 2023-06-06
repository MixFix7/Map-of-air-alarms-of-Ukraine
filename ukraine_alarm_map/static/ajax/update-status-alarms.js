var form = document.getElementById('outForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(form);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '', true);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            var responce = JSON.parse(xhr.responseText);
            var messageElement = document.getElementById('messageDocument');
            messageElement.textContent = responce.message;
        } else {
            console.error(xhr.statusText);
        }
    };

    xhr.onerror = function() {
        console.error('Error responce')
    };

    xhr.send(formData);
});