  async function buscarPokemon() {
    const input = document.getElementById("pokemonInput").value.trim().toLowerCase();
    const nameEl = document.getElementById("pokemon-name");
    const imgEl = document.getElementById("pokemon-image");
    const typeEl = document.getElementById("pokemon-type");

    if (!input) {
      nameEl.textContent = "Escribe un nombre";
      imgEl.src = "images/default-image.png";
      typeEl.textContent = "Tipo: -";
      return;
    }

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
      if (!response.ok) throw new Error("Pokémon no encontrado");

      const data = await response.json();
      const tipo = data.types.map(t => t.type.name).join(", ");

      nameEl.textContent = data.name.toUpperCase();
      imgEl.src = data.sprites.front_default;
      typeEl.textContent = `Tipo: ${tipo}`;
    } catch (error) {
      nameEl.textContent = "Pokémon no encontrado";
      imgEl.src = "images/default-image.png";
      typeEl.textContent = "Tipo: -";
    }
  }

