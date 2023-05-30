import React from "react";
import Link from 'next/link';

function IndexPage() {
  return (
    <>
      <h2>Práctica con APIs</h2>
      <p>En este sitio web puse a prueba mis conocimientos en Next JS 13, Bootstrap y API Fetch.</p>
      <ul>
        <li><Link href="/users">Listar API Users</Link></li>
        <picture>
          <img src="/reqres.jpg" alt="foto de reqres" />
        </picture>
        <li><Link href="/rickandmorty">API Rick y Morty</Link></li>
        <picture>
          <img src="/Rick-y-Morty.jpg" alt="foto de Rick y Morty" />
        </picture>
        <li><Link href="/cocktails">API de Margaritas drink</Link></li>
        <picture>
          <img src="/margaritas.jpg" alt="foto de margaritas" />
        </picture>
      </ul>
    </>
  );
}

export default IndexPage;
