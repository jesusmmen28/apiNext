"use client";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

function Users({ users }) {
  const router = useRouter();
  return (
    <ul>
      {users.map((user) => (
        <li
          key={user.id}
          onClick={() => {
            router.push(`/users/${user.id}`);
          }}
        >
          <div>
            <h3>
              {user.first_name} {user.last_name}
            </h3>
          </div>
          <picture>
            <img
              src={user.avatar}
              alt={user.email}
              style={{ borderRadius: "50%" }}
            />
          </picture>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
}

export default Users;
