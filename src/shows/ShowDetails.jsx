import "./shows.css";
import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";


export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return <p>Please select a show to watch.</p>;
  }

  return (
    <>
      <EpisodeList
        episodes={show.episodes}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </>
  );
}