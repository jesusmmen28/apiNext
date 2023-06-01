"use client";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

function Games({ games }) {
  const router = useRouter();
  return (
    
    <section className="container py-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        {games.map((game) => (
          <div className="col mb-4" key={game.id}>
            <div className="card mb-3 bg-light h-100 hover-effect">
              <picture>
                <img
                  src={game.thumbnail}
                  className="card-img-top"
                  alt={game.id}
                />
              </picture>
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h3 className="card-title">{game.title}</h3>
                  <h4 className="card-subtitle mb-2 text-body-secondary">
                    {game.developer}
                  </h4>
                  <p className="card-text">{game.description}</p>
                </div>
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => {
                    router.push(`/games/${game.id}`);
                  }}
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Games;
