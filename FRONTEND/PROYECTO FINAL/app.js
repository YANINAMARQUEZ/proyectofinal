const contenedor = document.getElementById("contenedor")

const personajes = fetch("https://rickandmortyapi.com/api/character")

personajes.then((response) => {
  return response.json()
}).then((data) => {
  const arrayDePersonajes = data.results
  
  for(let i = 0; i < arrayDePersonajes.length; i++) {
    const imagen = arrayDePersonajes[i].image
    const nombre = arrayDePersonajes[i].name
    const genero = arrayDePersonajes[i].gender
    const specie = arrayDePersonajes[i].species
    const estado = arrayDePersonajes[i].status

    contenedor.innerHTML += 
    `
    <div class="cont-personaje">
      <img
        src="${imagen}"
        alt="foto de personaje"
      />
      <h3>${nombre}</h3>
      <p>Género: ${genero}</p>
      <p>Especie: ${specie}</p>
      <p>Estado: ${estado}</p>
    </div>
    `
  }
})
