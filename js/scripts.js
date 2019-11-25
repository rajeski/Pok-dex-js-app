var pokemonRepository = (function () {
    var repository = [ {name: 'Beedrill', height: 1.0, types: ['swarm', 'sniper'] },
        {name: 'Charmeleon', height: 1.1, types: ['blaze', 'solar power'] },
        {name: 'Fearow', height: 1.2, types: ['keen-eye', 'sniper'] },
        {name: 'Pickachu', height: 0.4, types: ['lightningrod', 'static'] } ];
    
        function addListItem(pokemon) {
          var $pokemonList = document.querySelector("ul");
          var $listItem = document.createElement("li");
          var $button = document.createElement("button");
     
          $button.innerText = pokemon.name;
          $button.classList.add("list-button");
          $pokemonList.appendChild($listItem);
          $listItem.appendChild($button)
          addListener($button, pokemon);
        }
     
        function addListener(button, pokemon) {
          button.addEventListener("click", () => {
            showDetails(pokemon);
          });
        }
     
        function showDetails(pokemon) {
          console.log(pokemon);
        
          function getAll() {
            return repository;
          }
          return {
            addListItem: addListItem, 
            getAll: getAll
          };
        })();
        
        pokemonRepository.getAll().forEach(pokemon => {
          pokemonRepository.addListItem(pokemon);
        });