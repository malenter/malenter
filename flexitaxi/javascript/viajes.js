mapboxgl.accessToken = 'pk.eyJ1IjoianNhbmFicmlhNTI3IiwiYSI6ImNsaDUwNjJlNzF2MWsza294Y3A1dG5pc2QifQ.eeGIoP3e3yhv7l9lo0U2mg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v11',
  center: [-73.1198, 7.1194], // Centro en Bucaramanga
  zoom: 16
});

const directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
  unit: 'metric',
  profile: 'mapbox/driving',
  alternatives: false,
  geometries: 'geojson',
  controls: { instructions: false },
  flyTo: false,
  options: {
   proximity: [-73.1198, 7.1194] // Agregar el parámetro proximity para limitar las sugerencias de ruta a una región cercana a Bucaramanga
  }
});

map.addControl(directions, 'top-right');

navigator.geolocation.getCurrentPosition(position => {
  const userLocation = [position.coords.longitude, position.coords.latitude];
  map.setCenter(userLocation);

  const marker = new mapboxgl.Marker({
    color: 'black',
    draggable: false,
    scale: 1.2,
    offset: [0, -25],
    anchor: 'bottom',
    iconImage: 'mapbox-icon-blue'
  })
  .setLngLat(userLocation)
  .addTo(map);
  function calculateCost(distance, duration) {
  const costoPorKilometro = 0.5;
  const costoPorMinuto = 0.2;
  const costoTotal = (distance * costoPorKilometro) + (duration * costoPorMinuto);
  return costoTotal.toFixed(2);
}
    directions.on('route', function (event) {
      const route = event.route[0]; // Obtener la primera ruta
      const distance = route.distance / 1000; // Obtener la distancia en kilómetros
      const duration = route.duration / 60; // Obtener la duración en minutos
      const cost = calculateCost(distance, duration); // Calcular el costo de la ruta
      const distanciaElemento = document.getElementById('distancia');
      distanciaElemento.textContent = distance.toFixed(2);
      const duracionElemento = document.getElementById('duracion');
      duracionElemento.textContent = duration.toFixed(0);
      const costoElemento = document.getElementById('costo');
      costoElemento.textContent = '$' + cost;
  });
});
