import Rickandmortys from "@/components/Rickandmortys";


async function fetchrickandmorty() {
  const res = await fetch(
    "https://rickandmortyapi.com/api/character/?name=rick&status=alive"
  );
  const data = await res.json();
  return data.results;
}

async function rickandmortyPages() {
  const rickandmortys = await fetchrickandmorty();

  return (
    <section className="d-flex flex-column align-items-center justify-content-center py-4">
      <h2>Ricky y Morti</h2>
     <Rickandmortys rickandmortys={rickandmortys}/>
    </section>
  );
}

export default rickandmortyPages;
