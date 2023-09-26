import PageLinks from "./PageLinks1";
import { socialLink } from "../Data";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <ul className="footer-icons">
        {socialLink.map((iconLink) => {
          return (
            <SocialLinks
              key={iconLink.id}
              {...iconLink}
              itemClass="footer-link"
            />
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}
export default Footer;
