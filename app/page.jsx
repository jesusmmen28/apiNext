import React from "react";
import Link from "next/link";

function IndexPage() {
  return (
    <section className="d-flex flex-column align-items-center py-4">
      <h2>Práctica con APIs</h2>
      <p>
        Sitio web para probar mis conocimientos en las nuevas
        actualizaciones de Next JS 13, Bootstrap y API Fetch.
      </p>
      <div className="container">
        <ul className="list-unstyled">
          <li className="mb-4 text-center">
            <div className="mb-4">
              <Link
                className="text-decoration-none text-black fw-bold text-shadow-hover"
                style={{ fontSize: "1.5rem" }}
                href="/users"
              >
                Listar API Users
              </Link>
            </div>
            <div className="mb-4">
              <picture>
                <img
                  src="/reqres.jpg"
                  alt="foto de reqres"
                  className="img-fluid"
                />
              </picture>
            </div>
          </li>

          <li className="mb-4 text-center">
            <div className="mb-4">
              <Link
                className="text-decoration-none text-black fw-bold text-shadow-hover"
                style={{ fontSize: "1.5rem" }}
                href="/rickandmorty"
              >
                API Rick y Morty
              </Link>
            </div>
            <div>
              <picture>
                <img
                  src="/Rick-y-Morty.jpg"
                  alt="foto de Rick y Morty"
                  className="img-fluid"
                />
              </picture>
            </div>
          </li>

          <li className="mb-4 text-center">
            <div className="mb-4">
              <Link
                className="text-decoration-none text-black fw-bold text-shadow-hover"
                style={{ fontSize: "1.5rem" }}
                href="/games"
              >
                API de Games
              </Link>
            </div>
            <div>
              <picture>
                <img
                  src="/games.png"
                  alt="foto de juegos"
                  className="img-fluid"
                />
              </picture>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default IndexPage;
