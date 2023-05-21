async function placeSearch(category) {
  try {
    const searchParams = new URLSearchParams({
      query: category,
      open_now: 'true',
      sort: 'DISTANCE',
      near: 'Bucaramanga',
      venuePhotos: '1'
    });

    const results = await fetch(
      `https://api.foursquare.com/v3/places/search?${searchParams}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'fsq3skH30o7Ygp7E+TudNhxzCkwXO+Bx+icf45NZ750T6RQ='
        }
      }
    );

    const data = await results.json();
    const resultsContainer = document.getElementById('results-container');
    
    // Elimina cualquier contenido anterior en el contenedor de resultados
    resultsContainer.innerHTML = '';
    
    // Recorre los resultados y crea elementos HTML para mostrar la información
// Recorre los resultados y crea elementos HTML para mostrar la información
// Recorre los resultados y crea elementos HTML para mostrar la información
// Recorre los resultados y crea elementos HTML para mostrar la información
data.results.forEach(result => {
  const placeName = result.name;
  const placeAddress = result.location.address || 'Sin dirección disponible';
 

  // Crea un elemento <div> para mostrar la información del lugar
  const placeElement = document.createElement('div');
  placeElement.className = 'place';

  // Crea un elemento <h2> para mostrar el nombre del lugar
  const nameElement = document.createElement('h2');
  nameElement.textContent = placeName;

  // Crea un elemento <p> para mostrar la dirección del lugar
  const addressElement = document.createElement('p');
  addressElement.textContent = `Dirección: ${placeAddress}`;

  // Crea un elemento <img> para mostrar la foto del lugar

  // Crea un elemento <p> para mostrar el horario de atención del lugar
  
  

  // Agrega los elementos al elemento contenedor del lugar
  placeElement.appendChild(nameElement);
  placeElement.appendChild(addressElement);

  // Agrega el elemento contenedor del lugar al contenedor de resultados
  resultsContainer.appendChild(placeElement);
});
    
      } catch (err) {
        console.error(err);
      }
    }
 