import { Formik, useFormik } from "formik";
import './RSVPForm.scss';

export default function RSVPForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      attending: "Yes",
      guests: 0,
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
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
      
      <label htmlFor="rsvp-guests">Total Guests</label>
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

      <button id="rsvp-confirm" type="submit">Confirm</button>
    </form>
  );
}
