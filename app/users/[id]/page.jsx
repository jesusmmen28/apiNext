async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UsersPage({ params }) {
  const user = await getUser(params.id);

  return (
    <section>
      <picture>
        <img src={user.avatar} alt={user.email} />
      </picture>
      <h3>
        {user.first_name} {user.last_name}
      </h3>
      <p> {user.email}</p>
    </section>
  );
}

export default UsersPage;
