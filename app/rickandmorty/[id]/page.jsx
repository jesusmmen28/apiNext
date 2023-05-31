async function getRickyandmorty(id) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await res.json();
  return data;
}

async function rickandmortyPage({ params }) {
  const rickiandmorty = await getRickyandmorty(params.id);

  return (
    <section>
      <picture>
        <img
          src={rickiandmorty.image}
          alt={rickiandmorty.id}
          style={{ width: "200px", borderRadius: "50%" }}
        />
      </picture>
      <h3>{rickiandmorty.name}</h3>
      <p>Specie: {rickiandmorty.species}</p>
    </section>
  );
}

export default rickandmortyPage;
