import "../style/header.css";
import Link from "next/link";

function Header() {
  return (
    <div className="header">
      {/* left */}
      <div>
        <h1 className="logo">Port <span className="logo-span">folio</span></h1>
      </div>
      {/* right */}
      <div className="header-right-div">
        <ul className="header-links">
          <li>
            <Link href={"/"} className="nav-links">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="nav-links">
              About
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
