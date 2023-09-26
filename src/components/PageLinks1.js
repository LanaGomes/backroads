import { pageLinks } from "../Data.js";
import PageLink from "./PageLink.js";

function PageLinks1({ parentClass, itemClass }) {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <PageLink
            id={id}
            href={href}
            text={text}
            itemClass={itemClass}
            // {...links}  - destrutura o item link do pageLinks (id, href, text).
          />
        );
      })}
    </ul>
  );
}
export default PageLinks1;
