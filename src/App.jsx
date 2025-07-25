import { useState } from "react";
import ShowSelection from "./shows/ShowSelection.jsx";
import ShowDetails from "./shows/ShowDetails.jsx";
import { tvShows } from "./shows/data.js";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <>
      <header>
        <ShowSelection shows={tvShows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}