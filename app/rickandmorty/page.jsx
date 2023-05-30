async function fetchrickandmorty() {
  const res = await fetch("https://rickandmortyapi.com/api/character/?name=rick&status=alive");
  const data = await res.json();
  return data.results;
}

async function rickandmortyPage() {
  const characters = await fetchrickandmorty();
  return (
    <div>
      <h1>Rick y Morty</h1>
      <ul>
        {characters.map((character) => (
          <li
            key={character.id}
          >
            <div>
              <h3>
                {character.name} 
              </h3>
            </div>
            <picture>
              <img
                src={character.image}
                alt={character.id}
                style={{ width: "200px", borderRadius:"50%" } }
              />
            </picture>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default rickandmortyPage;
