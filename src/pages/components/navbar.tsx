import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPoo,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
function Navbar() {
  return (
    <>
      <main>
        <div className="top-0 left-0 flex h-screen w-16 flex-col bg-slate-900 text-white shadow">
          <Link href="/">
            <FontAwesomeIcon icon={faHouse} className="sidebar-icon" />
          </Link>
          <Link href="/github">
            <FontAwesomeIcon icon={faGithub} className="sidebar-icon" />
          </Link>
          <Link href="/tools">
            <FontAwesomeIcon
              icon={faScrewdriverWrench}
              className="sidebar-icon"
            />
          </Link>
          <Link href="/poo">
            <FontAwesomeIcon icon={faPoo} className="sidebar-icon" />
          </Link>
        </div>
      </main>
    </>
  );
}

export default Navbar;
