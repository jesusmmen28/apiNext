"use client";
import { useRouter } from "next/navigation";

function Rickandmortys({ rickandmortys }) {
  const router = useRouter();
  return (
    <div className="container py-4">
    <div className="row align-items-stretch">
      {rickandmortys.map((rickandmorty) => (
        <div className="col-lg-3 col-md-6 mb-4" key={rickandmorty.id}>
          <div
            onClick={() => {
              router.push(`/rickandmorty/${rickandmorty.id}`);
            }}
            className="card text-center d-flex flex-column h-100 hover-effect"
            style={{ cursor: "pointer" }}
          >
            <h3>{rickandmorty.name}</h3>
            <picture>
              <img
                src={rickandmorty.image}
                alt={rickandmorty.id}
                className="img-fluid rounded-circle mb-3 p-3 "
              />
            </picture>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Rickandmortys;
