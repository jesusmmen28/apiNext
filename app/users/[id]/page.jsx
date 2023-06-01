async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UsersPage({ params }) {
  const user = await getUser(params.id);

  return (
    <section>
    <div className="row justify-content-center py-4">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body text-center hover-effect">
            <picture>
              <img src={user.avatar} alt={user.email} className="rounded-circle mb-3 "  />
            </picture>
            <h3>
              {user.first_name} {user.last_name}
            </h3>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default UsersPage;
