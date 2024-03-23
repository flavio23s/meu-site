function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('#nome');
        const email = form.querySelector('#email');
        const telefone = form.querySelector('#telefone');
        const mensagem = form.querySelector('#mensagem');

        pessoas.push({
            nome: nome.value,
            email: email.value,
            telefone: telefone.value,
            mensagem: mensagem.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${email.value} ${telefone.value} ${mensagem.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();


function enviaDadosParaSheet(pessoa) {
    fetch('https://script.google.com/macros/s/AKfycbylpNNj7Bg6drl77HEZ6zOd45mtHQGinkZkozRKMwjedImIJjVfByZf0fdOkzwb-0MM/exec', { // Substitua com sua URL copiada
        method: 'POST',
        mode: 'no-cors', // Importante para evitar problemas com CORS
        redirect: 'follow',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(pessoa)
    })
    .then(response => console.log('Dados enviados com sucesso.'))
    .catch(error => console.error('Erro ao enviar dados:', error));
}
