document.querySelector('#submit').addEventListener('click', getPokemon);
document.querySelector('#pokemonName').addEventListener('keydown', (event) => {
  console.log('event', event);
if (event.key === 'Enter') {
  getPokemon(event);
}
});

function lowerCaseName(string){
  return string.toLowerCase();
}

function capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPokemon(e){
  const name = document.querySelector('#pokemonName').value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then((response) => response.json())
  .then((data) =>
  {document.querySelector('.pokemonBox').innerHTML = `
            <div>
                <img
                src="${data.sprites.other["official-artwork"].front_default}"
                alt="${data.name}">
            </div>
            <div class="pokemonInfo">
                <h1>${capitalize(data.name)}</h1>
                <p>Weight:  ${data.weight}</p>
                <p>Type: ${data.types[0].type.name}
            </div>`;
      })
  .catch((err) => {
    alert('Pokemon Not Found', err)
  });

  e.preventDefault();
}

