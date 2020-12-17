window.addEventListener("load", function () {
    let scoresBtn = document.getElementById('scores');
    let xhttp = new XMLHttpRequest();
    scoresBtn.onmouseup = hover;

    function hover() {


        xhttp.open('GET', 'processing.php', true);
        xhttp.addEventListener('readystatechange', function () {
            if ((xhttp.readyState == 4) && (xhttp.status == 200)) {
                let wrapper = document.getElementById('wrapp');
                wrapper.innerHTML = xhttp.responseText;
            }
        });
        xhttp.open("GET", " Access-Control-Allow-Origin:https://github.com/sovsianykov/JazzGuitarHub/blob/main/img.txt", false);
        xhttp.send();
        let wrapper = document.getElementById('wrapp');
        wrapper.innerHTML = xhttp.responseText;
    }

})
