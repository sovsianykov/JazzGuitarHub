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
        xhttp.open("GET", "./img.txt", true);
        xhttp.send();
        let wrapper = document.getElementById('wrapp');
        wrapper.innerHTML = xhttp.responseText;
    }

})


document.querySelector('#button').addEventListener(
    'click', loadData
);
function loadData() {
  const xhr = new XMLHttpRequest();
  xhr.open( 'GET', 'plan.txt', true);

  xhr.onload = function () {

      if (this.status === 200) {
          let p = document.createElement('p');

          p.textContent = this.responseText;
          console.log(this.responseText)


       document.getElementById('output').appendChild(p);
      }

  }

  xhr.send()
}

