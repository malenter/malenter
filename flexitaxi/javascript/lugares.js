const token = 'sk.eyJ1IjoianNhbmFicmlhNTI3IiwiYSI6ImNsaGJjeTFnYjBxNjczZ250NG91NDVjamkifQ.0XnME13wZrkynIJYnp0Pvg';

navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords;
  
  const radius = 20000000;

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${token}&types=poi&limit=10&radius=${radius}`;
  
  // Realizar la solicitud HTTP
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Verificar si data.features está definido
      if (data.features) {
        const lugares = data.features;
        // Mostrar los lugares en el HTML
        const lugaresDiv = document.getElementById('lugares');
        lugaresDiv.innerHTML = '';
        lugares.forEach(lugar => {
          const nombre = lugar.text;
          const direccion = lugar.properties.address;
          const categoria = lugar.properties.category;
          const lugarDiv = document.createElement('div');
          lugarDiv.innerHTML = `<h3>${nombre}</h3><p>${direccion}</p><p>${categoria}</p>`;
          lugaresDiv.appendChild(lugarDiv);
        });
      } else {
        // Mostrar un mensaje de error en el HTML
        const lugaresDiv = document.getElementById('lugares');
        lugaresDiv.innerHTML = '<p>No se encontraron lugares de interés</p>';
      }
    })
    .catch(error => {
      console.error(error);
      // Mostrar un mensaje de error en el HTML
      const lugaresDiv = document.getElementById('lugares');
      lugaresDiv.innerHTML = '<p>Error al buscar los lugares de interés</p>';
    });
  
}, error => {
  console.error(error);
  // Mostrar un mensaje de error en el HTML
  const lugaresDiv = document.getElementById('lugares');
  lugaresDiv.innerHTML = '<p>Error al obtener la ubicación del usuario</p>';
});
