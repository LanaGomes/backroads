function Title({ firstPartTitle, secondPartTitle }) {
  return (
    <div className="section-title">
      <h2>
        {firstPartTitle} <span>{secondPartTitle}</span>
      </h2>
    </div>
  );
}
export default Title;
