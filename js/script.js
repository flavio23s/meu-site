function meuEscopo () {
    const form = document.querySelector('.form'); 
    const resultado = document.querySelector('.resultado');
 
    const pessoas = [];
 
     function recebeEventoForm (evento) {
       evento.preventDefault();
 
       const nome = form.querySelector('.nome');
       const email = form.querySelector('.email');
       const telefone = form.querySelector('.telefone');
       const mensagem = form.querySelector('.mensagem');
 
       pessoas.push({
         nome: nome.value,
         email: email.value,
         telefone: telefone.value,
         mensagem: mensagem.value
       });
       
       console.log(pessoas);
 
       resultado.innerHTML += `<p>${nome.value} ${email.value} ` +
       `${telefone.value} ${mensagem.value}</p>`;
     }
 
     form.addEventListener('submit', recebeEventoForm);
  }
  meuEscopo();
 