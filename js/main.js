/**
 * Your JS code here
 */

/**
 * Sample code
 */

function nxtslide(n) {
    var sld = document.getElementsByClassName("slide");
    
    var cursl = sld[0].style.backgroundImage;
    var snum = parseInt(cursl.charAt(16)) + n;
    if (n == 1) 
        if (snum == 4) snum = 1;
    else 
        if (snum == 0) snum = 3;
    var url = "url(img/Picture" + snum + ".jpg)";
    sld[0].style.backgroundImage = url;
    updatedot(snum-1);
}

function updatedot(n){
    var dot = document.getElementsByClassName("dot");
    for (i = 0; i < 3; i++) {
        dot[i].className = "dot";
    }
    dot[n].className += " active";
}

function dotslide(n){
    var sld = document.getElementsByClassName("slide");
    sld[0].style.backgroundImage = "url(img/Picture" + n + ".jpg)";
    updatedot(n-1);
}
document.addEventListener('DOMContentLoaded', function() {
  var ulElement = document.getElementById('links');
  var liElement = document.createElement('li');
  liElement.appendChild(document.createTextNode('created by main.js'));

  ulElement.appendChild(liElement);
});
