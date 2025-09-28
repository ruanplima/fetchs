const link = 'https://pokeapi.co/api/v2/pokemon/';
fetch(link)
  .then((r) => {
    return r.json();
  })
  .then((r) => {
    const pokemons = r.results;
    pokemons.forEach((pokemon) => {
      const container = document.querySelector('.selected-pokemon');
      container.innerHTML += `<option value=${pokemon.name}>${pokemon.name}</option>`;
    });
  });

const selecione = document.querySelector('select');
selecione.addEventListener('change', (e) => {
  const searchPokemos = `https://pokeapi.co/api/v2/pokemon/${e.currentTarget.value}/`;
  fetch(searchPokemos)
    .then((r) => {
      return r.json();
    })
    .then((r) => {
      const nome = document.querySelector('.nome');
      const peso = document.querySelector('.peso');
      const imagem = document.querySelector('img.imagem');

      imagem.classList.remove('animate');
      nome.parentElement.classList.remove('animate');
      peso.parentElement.classList.remove('animate');

      void imagem.offsetWidth;

      imagem.src = r.sprites.other.dream_world.front_default;
      nome.textContent = r.name;
      peso.textContent = r.weight + 'kg';

      setTimeout(() => {
        imagem.classList.add('animate');
        nome.parentElement.classList.add('animate');
        peso.parentElement.classList.add('animate');
      }, 10);
    });
});
