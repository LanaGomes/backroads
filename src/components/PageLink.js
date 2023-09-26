function PageLink({ id, href, text, itemClass }) {
  return (
    <li key={id}>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  );
}
export default PageLink;
