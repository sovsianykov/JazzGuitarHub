window.addEventListener("load",(function(){let e=document.getElementById("scores"),t=new XMLHttpRequest;e.onmouseup=function(){t.open("GET","processing.php",!0),t.addEventListener("readystatechange",(function(){if(4==t.readyState&&200==t.status){document.getElementById("wrapp");welcome.innerHTML=t.responseText}})),t.open("GET","http://http://localhost:3000/yankee_blues.html",!1),t.send(),document.getElementById("wrapp").innerHTML=t.responseText}}));
//# sourceMappingURL=script.js.map
function easyHTTP() {

    this.http = new XMLHttpRequest();

}
//MAKE an HTTP Get request
easyHTTP.prototype.get = function  (url) {
    this.http.open('GET', url , true ) ;

    this.http.onload =   () => {
        if (this.http.status === 200 )  {
            console.log(this.http.responseText);
        }

    }



    this.http.send();
}
const http = new easyHTTP;
// Get Posts
http.get('//github.com/sovsianykov/JazzGuitarHub/blob/main/img/scrs/y1.jpg'); 
