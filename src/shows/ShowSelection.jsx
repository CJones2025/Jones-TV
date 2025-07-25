import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav>
      {shows.map((show) => (
        <a
          className="show"
          key={show.name}
          href="#"
          onClick={(event) => {
            event.preventDefault(); // prevent page jump
            setSelectedShow(show);
          }}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}