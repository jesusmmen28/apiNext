import Users from "@/components/Users";
import React from "react";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

async function UsersPage() {
  const users = await fetchUsers();

  return (
    <section className="d-flex flex-column align-items-center justify-content-center py-4">
      <h2>Usuarios</h2>
      <Users users={users} />
    </section>
  );
}

export default UsersPage;