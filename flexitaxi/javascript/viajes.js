// Configurar el mapa
mapboxgl.accessToken = 'pk.eyJ1IjoianNhbmFicmlhNTI3IiwiYSI6ImNsaDUxb2pvbjE4NnkzcHFya3p3MzNpc2cifQ.3MRI9zcZ1s99ZmInwcpHww';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 14
  });
  
  var geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  });
  
  map.addControl(geolocate);
  
  geolocate.on('geolocate', function(event) {
    var longitude = event.coords.longitude;
    var latitude = event.coords.latitude;
    map.setCenter([longitude, latitude]);
    
    // Utilizar la API de geocodificación de Mapbox para obtener la dirección actual del usuario
    var geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    });
    
    geocoder.reverseGeocode({lnglat: [longitude, latitude]}, function (error, result) {
      if (error) {
        console.log(error);
        return;
      }
      
      var address = result.features[0].place_name;
      document.getElementById('origin').value = address; // Mostrar la dirección en lugar de la longitud y la latitud
    });
  });
  
  navigator.geolocation.getCurrentPosition(function(position) {
    var longitude = position.coords.longitude;
    var latitude = position.coords.latitude;
    map.setCenter([longitude, latitude]);
    
    // Utilizar la API de geocodificación de Mapbox para obtener la dirección actual del usuario
    var geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    });
    
    geocoder.reverseGeocode({lnglat: [longitude, latitude]}, function (error, result) {
      if (error) {
        console.log(error);
        return;
      }
      
      var address = result.features[0].place_name;
      document.getElementById('origin').value = address; // Mostrar la dirección en lugar de la longitud y la latitud
    });
  });
