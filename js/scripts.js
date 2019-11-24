var pokemonRepository = (function () {
    var repository = [ {name: 'Beedrill', height: 1.0, types: ['swarm', 'sniper'] },
        {name: 'Charmeleon', height: 1.1, types: ['blaze', 'solar power'] },
        {name: 'Fearow', height: 1.2, types: ['keen-eye', 'sniper'] },
        {name: 'Pickachu', height: 0.4, types: ['lightningrod', 'static'] } ];
    
        function add(item) {
            return repository.push(item);
          }
        
          function getAll() {
            return repository;
          }
          return {
            add: add,
            getAll: getAll
          };
        })();
        
        pokemonRepository.getAll().forEach(pokemon => {
            if (pokemon.height > 0.5) {
                document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ") - Wow, that is a big pocket monster!</p>");
              } else {
                document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ")</p>");
              }
        });