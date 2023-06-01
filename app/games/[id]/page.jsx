async function getGame(id) {
  const res = await fetch(`https://www.freetogame.com/api/game?id=${id}`);
  const data = await res.json();
  return data;
}

async function GamePage({ params }) {
  const game = await getGame(params.id);

  return (
    <div className="container py-4">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="card mb-3 bg-light text-center">
          <picture>
            <img src={game.thumbnail} className="card-img-top" alt={game.id} />
          </picture>
          <div className="card-body">
            <h3 className="card-title">{game.title}</h3>
            <h4 className="card-subtitle mb-2 text-body-secondary">
              {game.developer}
            </h4>
            <p className="card-text">{game.description}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default GamePage;
