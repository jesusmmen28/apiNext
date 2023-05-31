import Games from "@/components/Games";


async function fetchGames() {
  const res = await fetch(
    "https://www.freetogame.com/api/games?platform=pc"
  );
  const data = await res.json();
  return data;
}

async function gamePages() {
  const games = await fetchGames();

  return (
    <section>
      <h2>Games</h2>
     <Games games={games}/>
    </section>
  );
}

export default gamePages;
