function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(e) {
        e.preventDefault();

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

        enviaDadosParaSheet(pessoas);
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();


function enviaDadosParaSheet(pessoas) {
    fetch('https://script.google.com/macros/s/AKfycbwi013dWzf0fe3wsKCBVQEVBapD5cxWQxAwvhTZ0k7wEWl_zB0WeZZe1TB_FaKhS6he/exec', { // Substitua com sua URL copiada
        method: 'POST',
        mode: 'no-cors', // Importante para evitar problemas com CORS
        redirect: 'follow',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(pessoas)
    })
    .then(response => console.log('Dados enviados com sucesso.'))
    .catch(error => console.error('Erro ao enviar dados:', error));
}


<script>
    function initMap() {
        var minhaLocalizacao = {lat: -27.6222727 , lng: -48.6785527}; // Substitua pelas suas coordenadas
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: minhaLocalizacao
        });
        var marker = new google.maps.Marker({
            position: minhaLocalizacao,
            map: map
        });
    }
</script>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDDU0TPXzGefisXl9ygUuYeO3zYH9e9aS0&callback=initMap"></script>
