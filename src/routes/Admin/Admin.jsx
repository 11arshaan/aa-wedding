import { useEffect, useState } from "react";
import { getGuests } from "../../utility/firebase-util";
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
      <div key={guest.id}  className="accordion-container">
        <button onClick={handleClick} className="guest-accordion">
          <span className="guest-accordion-name">{data.name}</span>
          <span>{data.attending}</span>
          <span>{data.guests}</span>
          <span>{data.email}</span>
          <span>{data.phone}</span>
        </button>
        <div className="guest-details">
          <div className="guest-details-message">
            <p>Message:</p>
            <p className="message-text">{data.message}</p>
          </div>


        </div>
      </div>
    );
  }

  const handleClick = (e) => {
    const previous = document.querySelector(".active-guest");
    previous && previous.classList.toggle("active-guest");
    previous && (previous.nextElementSibling.style.maxHeight = null);

    if (previous === e.currentTarget) {
      return;
    }

    const target = e.currentTarget;
    target.classList.toggle("active-guest");
    var panel = target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  return (
    <div className="app">
      <div className="admin">
        <div className="guests-container">
        <div   className="accordion-container">
        <button onClick={handleClick} className="guest-accordion-header">
          <span className="guest-accordion-name">Name</span>
          <span>Attending</span>
          <span>Total Guest</span>
          <span>E-mail</span>
          <span>Phone</span>
        </button>
        <div className="guest-details">
          <div className="guest-details-message">
          </div>


        </div>
      </div>
        {guests.map(createGuestEntry)}</div>
      </div>
    </div>
  );
}
