import Users from "@/components/Users";
import React from "react";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users?page=2");
  const data = await res.json();
  return data.data;
}

async function UsersPage() {
  const users = await fetchUsers();

  return (
    <section>
      <h2>Usuarios</h2>
      <Users users={users} />
    </section>
  );
}

export default UsersPage;