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
