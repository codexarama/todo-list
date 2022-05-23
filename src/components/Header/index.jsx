export default function Header({ heading }) {
  return (
    <header aria-labelledby="page-title">
      <h1 tabIndex="0" id="page-title">
        {heading}
      </h1>
    </header>
  );
}
