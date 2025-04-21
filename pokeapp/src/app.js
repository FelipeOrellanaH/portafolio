async function buscarPokemon() {
    const input = document.getElementById('pokemonInput').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${input}`;
  
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("No se encontró el Pokémon");
  
      const data = await res.json();
  
      document.getElementById('pokemonCard').classList.remove('d-none');
      document.getElementById('pokemonImage').src = data.sprites.front_default;
      document.getElementById('pokemonName').textContent = data.name.toUpperCase();
      document.getElementById('pokemonType').textContent = 
        "Tipo(s): " + data.types.map(t => t.type.name).join(', ');
  
    } catch (error) {
      alert(error.message);
      document.getElementById('pokemonCard').classList.add('d-none');
    }
  }
  