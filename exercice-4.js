window.addEventListener("DOMContentLoaded", function(){
    
    let body = document.querySelector("body");
    let ul = document.createElement("ul");
    
    let pokemons = [" Pikachu", " Salameche", " Bulbizarre", " Carapuce" ];
    
    for(let i=0; i<pokemons.length; i++){ // je creer une boucle pour parcourir le tableau
        let li = document.createElement('li'); // je creer la balise li 
        let element = document.createTextNode(pokemons[i]); //je creer une variable qui recupère tout les elements du tableau pokemons
        li.appendChild(element); // j'ajoute les elements dans li
        ul.appendChild(li); // j'ajoute les li dans les ul
        
    }
    body.appendChild(ul); // j'ajoute les ul dans body
    
});
