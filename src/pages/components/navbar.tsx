import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <>
      <main>
        <div className="top-0 left-0 flex h-screen w-16 flex-col bg-slate-900 text-white shadow">
          <FontAwesomeIcon icon={faHouse} className="sidebar-icon" />
          <FontAwesomeIcon icon={faHouse} className="sidebar-icon" />
          <FontAwesomeIcon icon={faHouse} className="sidebar-icon" />
          <FontAwesomeIcon icon={faHouse} className="sidebar-icon" />
        </div>
      </main>
    </>
  );
}

export default Navbar;
