window.addEventListener("DOMContentLoaded", function(){
    
    let body = document.querySelector("body");
    let ul = document.createElement("ul");
    let li = document.createElement('li');
    let pokemons = [" Pikachu", " Salameche", " Bulbizarre", " Carapuce" ];
    
    body.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(pokemons);
    
    
});