import Link from "next/link";

function Navbar() {
  return (
    <div>
      <ul className="top-0 flex w-screen justify-center bg-transparent text-white">
        <li className="nav">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="nav">
          <Link href="/terminal">
            <a>Terminal</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
