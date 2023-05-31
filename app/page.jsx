import React from "react";
import Link from "next/link";

function IndexPage() {
  return (
    <section>
      <h2>Práctica con APIs</h2>
      <p>
        En este sitio web puse a prueba mis conocimientos en las nuevas
        actualizaciones de Next JS 13, Bootstrap y API Fetch.
      </p>
      <ul>
        <li>
          <Link href="/users">Listar API Users</Link>
        </li>
        <picture>
          <img src="/reqres.jpg" alt="foto de reqres" />
        </picture>
        <li>
          <Link href="/rickandmorty">API Rick y Morty</Link>
        </li>
        <picture>
          <img src="/Rick-y-Morty.jpg" alt="foto de Rick y Morty" />
        </picture>
        <li>
          <Link href="/games">API de Games</Link>
        </li>
        <picture>
          <img src="/games.png" alt="foto de juegos" />
        </picture>
      </ul>
    </section>
  );
}

export default IndexPage;
