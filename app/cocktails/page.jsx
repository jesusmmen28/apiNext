async function fetchCocktails() {
  const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
  const data = await res.json();
  return data.drinks;
}

async function CocktailsPage() {
  const margaritas = await fetchCocktails();
  return (
    <div>
      <h1>Margaritas Drinks</h1>
      <ul>
        {margaritas.map((margarita) => (
          <li key={margarita.idDrink}>
            <div>
              <h3>{margarita.strDrink}</h3>
              <p>{margarita.strInstructions}</p>
            </div>
            <picture>
              <img src={margarita.strDrinkThumb} alt={margarita.idDrink}
              style={{ width: "200px", borderRadius:"50%" } }/>
            </picture>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CocktailsPage;
