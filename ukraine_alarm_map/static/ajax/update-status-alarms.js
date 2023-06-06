var xhr = new XMLHttpRequest();

xhr.open('GET', '', true);

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status <= 400) {
        // Success server answer processing
        var responce = JSON.parse(xhr.responseText);     
        console.log(responce.data);
    } else {
        console.error(xhr.statusText)
    }
};

xhr.onerror = function() {
    console.error("Error response");
};

setTimeout(function() {
    xhr.send();
}, 15000); 




