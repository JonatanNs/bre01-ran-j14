window.addEventListener("DOMContentLoaded", function(){
    
    let h2 = document.createElement("h2");
    let textH2 = document.createTextNode("Le titre de la deuxième section"); // on creer le texte pour le titre h2
    
    let p = document.createElement("p");
    let textP = document.createTextNode("Le paragraphe de la deuxième section"); // on creer le texte pour le paragraphe p
    
    h2.appendChild(textH2); // ajoute le text h2 au titre h2 
    p.appendChild(textP); // ajoute le text p au paragraphe p
    
    let section2 = document.querySelector("body > section:last-of-type"); // on recupère l'élément section
    
    section2.appendChild(h2);
    section2.appendChild(p); 
    
});
