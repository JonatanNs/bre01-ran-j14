window.addEventListener("DOMContentLoaded", function(){
    let p = document.querySelector("p");
    let ici = document.createTextNode("ici");
    p.appendChild(ici);
    
    let a = document.createElement("a");
    a.setAttribute('href', "https:google.com");
    p.appendChild(a);
    
});


