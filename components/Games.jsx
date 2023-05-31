"use client";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

function Games({ games }) {
  const router = useRouter();
  return (
    <ul>
      {games.map((game) => (
        <li
          key={game.id}
          onClick={() => {
            router.push(`/games/${game.id}`);
          }}
        >
          <h3>{game.title}</h3>
          <picture>
            <img
              src={game.thumbnail}
              alt={game.id}
              style={{ width: "200px" }}
            />
          </picture>
          <p>{game.short_description}</p>
        </li>
      ))}
    </ul>
  );
}

export default Games;
