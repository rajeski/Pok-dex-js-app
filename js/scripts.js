var pokemonRepository = (() => {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  function loadList() {
    return fetch(apiUrl)
      .then(res => res.json())
      .then(pokemonList => {
        var response = pokemonList.results;
        response.forEach(item => {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(err => {
        console.log(err);
      });
  }

  function add(item) {
    repository.push(item);
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url)
      .then(res => res.json())
      .then(details => {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
      }).catch(err => console.log(err))
  }

  function addListItem(pokemon) {
    var $pokemonList = document.querySelector("ul");
    var pokemonRepository = (function () {
  });
}

function showDetails(item) {
  pokemonRepository.loadDetails(item)
    .then(() => {
      console.log(item);
    });
}

function getAll() {
  return repository;
}

return {
  loadList: loadList,
  loadDetails: loadDetails,
  addListItem: addListItem,
  getAll: getAll
};
})();

pokemonRepository.loadList()
  .then(() => {
    pokemonRepository.getAll().forEach(pokemon => {
      pokemonRepository.addListItem(pokemon);
    });
  }); 