"use client";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

function Users({ users }) {
  const router = useRouter();
  return (
    <section className="d-flex flex-column align-items-center py-4">
    <div className="container">
      <div className="row">
        {users.map((user) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card">
              <div
                onClick={() => {
                  router.push(`/users/${user.id}`);
                }}
                className="card-body d-flex flex-column align-items-center justify-content-center text-center hover-effect"
              >
                <h3 className="mb-0">
                  {user.first_name} {user.last_name}
                </h3>
                <picture>
                  <img
                    src={user.avatar}
                    alt={user.email}
                    style={{ borderRadius: "50%" }}
                  />
                </picture>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}

export default Users;
