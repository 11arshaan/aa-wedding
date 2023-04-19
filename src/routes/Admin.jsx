import { useEffect, useState } from "react";
import { getGuests } from "../utility/firebase-util";
import "./Admin.scss";

export default function Admin() {
  const [guests, setGuests] = useState([]);
 

  useEffect(() => {
    //check localStorage
    const cacheGuests = localStorage.getItem("guests");
    if (cacheGuests) {
      setGuests(JSON.parse(cacheGuests));
    }

    const unsubscribe = getGuests((newGuests) => {
      setGuests(newGuests);
      localStorage.setItem("guests", JSON.stringify(newGuests));
    });
    

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };

    
  }, []);

  function createGuestEntry(guest) {
    const data = guest.data;
    return (
      <div key={guest.id} onClick={handleClick} className="accordion-container">
        <button className="guest-accordion">
          <span>{data.name}</span>
        </button>
        <div className="guest-details">
          <p>{data.message}</p>
        </div>
      </div>
    );
  }

  const handleClick = (e) => {
    e.target.classList.toggle("active-guest");
    var panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  return (
    <div className="app">
      <div className="admin">
        <div className="guests-container">{guests.map(createGuestEntry)}</div>
      </div>
    </div>
  );
}
