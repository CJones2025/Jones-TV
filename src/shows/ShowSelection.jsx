import "./shows.css";


export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav>
      {shows.map((show) => (
        <a
          className="show"
          key={show.name}
          href="#"
          onClick={(event) => {
            event.preventDefault();
            setSelectedShow(show);
          }}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}