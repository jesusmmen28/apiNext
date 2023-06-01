import Link from "next/link";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark-subtle">
      <div className="container-fluid">
        <Link class="navbar-brand" href="/">
          App de APIs
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav">
            <li>
              <Link class="nav-link" href="/users">Users</Link>
            </li>
            <li>
              <Link class="nav-link" href="/rickandmorty">Serie</Link>
            </li>
            <li>
              <Link class="nav-link" href="/games">Games</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
