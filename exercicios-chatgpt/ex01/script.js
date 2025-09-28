const botao = document.querySelector('button');
const inputFoto = document.querySelector('.foto');
const inputNome = document.querySelector('.nome');
const inputEmail = document.querySelector('.email');

function pessoasAleatorias() {
  fetch('https://randomuser.me/api/')
    .then((r) => {
      return r.json();
    })
    .then((r) => {
      const primeiroNome = r.results[0].name.first;
      const ultimoNome = r.results[0].name.last;
      const contatoEmail = r.results[0].email;
      const imagem = r.results[0].picture.large;
      inputNome.textContent = `${primeiroNome} ${ultimoNome}`;
      inputEmail.textContent = contatoEmail;
      inputFoto.src = imagem;
    })
    .catch((erro) => {
      const erroClass = document.querySelector('.erro');
      const divConteudo = document.querySelector('.content');
      divConteudo.remove();
      inputFoto.remove();
      erroClass.textContent = `Erro ao buscar um novo usuário | ${erro}`;
    });
}

pessoasAleatorias();

botao.addEventListener('click', pessoasAleatorias);
