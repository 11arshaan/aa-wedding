import "./ToggleAudio.scss";
import SpeakerPlay from "../../assets/Speaker Play.svg";
import SpeakerMute from "../../assets/SpeakerMute.svg";
import {useEffect, useState} from 'react';

export default function ToggleAudio({music}) {
const [playing, setPlaying] = useState(true);

  function toggleAudio() {
    if (playing) {
      music.current.pause();
      setPlaying(false);
    } else {
      music.current.play();
      setPlaying(true);
    }
  }

  return (<div className="toggle-audio">
  {playing && <img onClick={toggleAudio} src={SpeakerPlay} className="speaker-svg" />}
    {!playing && <img onClick={toggleAudio} src={SpeakerMute} className="speaker-svg" />}
  </div>)
}