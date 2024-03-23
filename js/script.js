const script_do_google = 'https://script.google.com/macros/s/AKfycbwi013dWzf0fe3wsKCBVQEVBapD5cxWQxAwvhTZ0k7wEWl_zB0WeZZe1TB_FaKhS6he/exec';
const dados_do_formulario = document.forms['formulario-contato'];

dados_do_formulario.addEventListener( 'submit', function (e) {
    e.preventDefault(); // evita que o formulário seja enviado pelo navegador padrão

    fetch(script_do_google, {method: 'POST', mode: 'no-cors', body: new FormData(dados_do_formulario) })
    .then(response => {
        //Se os dados forem enviados corretamente, será enviada uma mensagem de sucesso
        alert('Dados enviados com sucesso!', response);
        dados_do_formulario.reset();
    })
    .catch(error =>
        //Se houver algum erro no envio, será exibida a mensagem abaixo
        console.error('Erro no envio dos dados!', error)
    );
});
