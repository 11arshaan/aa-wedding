import { Formik, useFormik } from "formik";
import { addGuest } from "../../utility/firebase-util";
import {useState, useEffect} from 'react';
import './RSVPForm.scss';
import RightGraphic from "../../components/Graphic/Graphic";

export default function RSVPForm() {

  const [modal, setModal] = useState(false);


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      attending: "Yes",
      guests: 0,
      message: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const result = await addGuest(values.name, values.email, values.phone, values.attending, values.guests, values.message);
      if (result) {
        setModal(true);
        resetForm(); // Reset the form values
      } else {
        alert("Error submitting form. Please try again later or e-mail us at: ");
      }
      setSubmitting(false); // Set submitting back to false
    },
  });

  function handleModal(e) {

    if (e.target.classList.contains('rsvp-modal')) {
      setModal(false);
    } else if (e.target.id === "close-modal-button") {
      setModal(false);
    }

  }

  return (<>
  <div className="container-left">
  {modal && <div onClick={handleModal}  className="rsvp-modal">
    <div className="rsvp-modal-content">
    <h1>Thank you!</h1>
    <p>We have received your RSVP and will notify you with important updates.</p>
    <button onClick={handleModal} type="button" id="close-modal-button">Close</button>
    </div>
  </div>}
  
    <form id="rsvp-form" onSubmit={formik.handleSubmit}>
      <label htmlFor="rsvp-name">Name</label>
      <input
        id="rsvp-name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        required
      />

      <label htmlFor="rsvp-email">E-mail</label>
      <input
        id="rsvp-email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        required
      />

      <label htmlFor="rsvp-phone">Phone</label>
      <input
        id="rsvp-phone"
        name="phone"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />

      <legend>Attending</legend>
      <fieldset>
        

        <div className="attending-container">
        <input
          id="rsvp-attending-yes"
          name="attending"
          type="radio"
          onChange={formik.handleChange}
          value="Yes"
          checked={formik.values.attending === "Yes"}
        />
        <label htmlFor="rsvp-attending-yes">Yes</label>
        </div>

        <div className="attending-container">
        <input
          id="rsvp-attending-no"
          name="attending"
          type="radio"
          onChange={formik.handleChange}
          value="No"
          checked={formik.values.attending === "No"}
        />
        <label htmlFor="rsvp-attending">No</label>
        </div>

        <div className="attending-container">
        <input
          id="rsvp-attending-maybe"
          name="attending"
          type="radio"
          onChange={formik.handleChange}
          value="Maybe"
          checked={formik.values.attending === "Maybe"}
        />
        <label htmlFor="rsvp-attending">Maybe</label>
        </div>
      </fieldset>

      <label htmlFor="rsvp-guests">Number of Guests</label>
      <input
        id="rsvp-guests"
        name="guests"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.guests}
      />

      <label htmlFor="rsvp-message">Message</label>
      <textarea
        id="rsvp-message"
        name="message"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.message}
      />

      <button id="rsvp-confirm" type="submit" disabled={formik.isSubmitting}>Confirm</button>
    </form>
   
    </div>
    <RightGraphic />
     {/* <div className="container-right">
     
    </div> */}
    </>
  );
}
