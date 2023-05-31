import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <div>
        <Link href="/">App de APIs</Link>
        <div>
          <ul>
            <li>
              <Link href="/users">Users</Link>
            </li>
            <li>
              <Link href="/rickandmorty">Serie</Link>
            </li>
            <li>
              <Link href="/games">Games</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
