"use client";
import { useRouter } from "next/navigation";

function Rickandmortys({ rickandmortys }) {
  const router = useRouter();
  return (
    <ul>
      {rickandmortys.map((rickandmorty) => (
        <li
          key={rickandmorty.id}
          onClick={() => {
            router.push(`/rickandmorty/${rickandmorty.id}`);
          }}
        >
          <h3>{rickandmorty.name}</h3>
          <picture>
            <img
              src={rickandmorty.image}
              alt={rickandmorty.id}
              style={{ width: "200px", borderRadius: "50%" }}
            />
          </picture>
        </li>
      ))}
    </ul>
  );
}

export default Rickandmortys;
