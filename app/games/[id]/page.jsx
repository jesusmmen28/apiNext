async function getGame(id) {
  const res = await fetch(`https://www.freetogame.com/api/game?id=${id}`);
  const data = await res.json();
  return data;
}

async function GamePage({ params }) {
  const game = await getGame(params.id);

  return (
    <section>
      <h3>{game.title}</h3>
      <picture>
        <img src={game.thumbnail} alt={game.id} />
      </picture>
      <div>
        <h4>{game.developer}</h4>
        <p> {game.description}</p>
      </div>
    </section>
  );
}

export default GamePage;
