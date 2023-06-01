async function getRickyandmorty(id) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await res.json();
  return data;
}

async function rickandmortyPage({ params }) {
  const rickiandmorty = await getRickyandmorty(params.id);

  return (
      <section className="container-fluid py-4">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center hover-effect">
                <picture>
                  <img
                    src={rickiandmorty.image}
                    alt={rickiandmorty.id}
                    className="rounded-circle mb-3"
                    style={{ width: "200px" }}
                  />
                </picture>
                <h3>{rickiandmorty.name}</h3>
                <p>Specie: {rickiandmorty.species}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default rickandmortyPage;
