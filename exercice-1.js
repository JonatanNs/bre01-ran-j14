window.addEventListener("DOMContentLoaded", function(){
    let newLi = document.createElement("li"); // on creer l'élément li
    let newLiText = document.createTextNode("Sucre"); // on creer le text du li 
    let ul = document.getElementById("ingredients"); // on recupére le ul
    newLi.appendChild(newLiText); // on ajoute le texte dans l'element li
    ul.appendChild(newLi); // on ajoute le li(element li + text li) dans le ul 
});

