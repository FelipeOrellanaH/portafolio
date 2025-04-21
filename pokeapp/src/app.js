
//funcion asyncrona es decir que no te bloquea y devuelven automaticamente una promesa
async function buscarPokemon() {
  //asignamos a input el id obtenido del documento html
const input = document.getElementById('pokemonInput').value.toLowerCase();
  //luego asiganmos la url del pokemon solicitado a la const url
const url = `https://pokeapi.co/api/v2/pokemon/${input}`;

try {


    const res = await fetch(url); //Se piden los datos (GET) a la url del pokemon antes definida
    if (!res.ok) throw new Error("No se encontró pokemon"); //Si la respuesta no es ok lanzar error
    const data = await res.json(); //Trasformar los datos obtenidos en un json

   /* Entrega todos los datos de un pokemon por consola
    const datos_pokemon = await res.json();
    console.log(datos_pokemon)
   */

    document.getElementById('pokemonCard').classList.remove('d-none'); //se quita el d-none para que la tarjeta aparezca por pantalla
    document.getElementById('pokemonImage').src = data.sprites.front_default; //a pokemonImage se le asigna data.srpite
    document.getElementById('pokemonName').textContent = data.name.toUpperCase();
    document.getElementById('pokemonType').textContent = 
    "Tipo(s): " + data.types.map(t => t.type.name).join(', ');

} catch (error) {
  alert(error.message);
  document.getElementById('pokemonCard').classList.add('d-none');
}


}
   
  