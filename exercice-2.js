window.addEventListener("DOMContentLoaded", function(){
    
    let h2 = document.querySelector("body > section:nth-child(2) h2:nth-child(2)"); // on récupère le titre h2
    let textH2 = h2.createTextNode("Le titre de la deuxième section"); // on creer le texte pour le titre h2
    
    let p = document.querySelector("body > section:nth-child(2) p:nth-child(2)"); // on récupère le paragraphe p
    let textP = p.createTextNode("Le paragraphe de la deuxième section"); // on creer le texte pour le paragraphe p
    
    h2.appendChild(textH2); // ajoute le text h2 au titre h2 
    p.appendChild(textP); // ajoute le text p au paragraphe p
    
    let section2 = document.querySelector("body > section:last-child(2)"); // on recupère l'élément section
    
    let newh2 = section2.appendChild(h2) // j'ajoute un h2 a section
    let newP = section2.appendChild(p) // j'ajoute un p a section
    
    newh2.appendChild("textH2"); // j'ajoute un text au titre h2  
    newP.appendChild("textP"); // j'ajoute un text au paragraphe p 
    
    section2.appendChild(newP); 
    section2.appendChild(newH2);
});
