import logo from "../images/logo.svg";
import { socialLink } from "../Data.js";
import PageLinks from "./PageLinks1";
import PageLinks1 from "./PageLinks1";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* Você pode fazer comentários em React assim! :D*/}

        <PageLinks1 parentClass="nav-links" itemClass="nav-link" />

        <ul className="nav-icons">
          {socialLink.map((link) => {
            /*mesmo processo dos links mas usando destructuring*/
            const { id, href, icon } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
