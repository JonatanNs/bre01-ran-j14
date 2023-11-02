window.addEventListener("DOMContentLoaded", function(){
    let p = document.querySelector("p"); //je recupère le paragraphe
    let ici = document.createTextNode("ici"); // je creer un element texte 
    let a = document.createElement("a"); // je creer une balise a
    
    p.appendChild(a); // j'ajoute la balise a au paragraphe
    a.appendChild(ici); // j'ajoute la balise a au texte ici 
    a.setAttribute('href','https://google.com'); //j'utilse "setAttribute" pour ajoute le lien

});


