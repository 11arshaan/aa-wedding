const functions = require("firebase-functions");
const admin = require("firebase-admin");
const formData = require("form-data");
const Mailgun = require("mailgun.js");

admin.initializeApp();

exports.sendEmailOnRSVP = functions.firestore
  .document("guests/{guestId}")
  .onCreate(async (snap, context) => {
    const guestData = snap.data();

    // Prepare email data
    // const mailOptions = {
    //   from: "amaritandarsheen@gmail.com",
    //   to: "11arshaan@gmail.com",
    //   subject: "New RSVP Submission",
    //   text: `
    //   Name: ${guestData.name}
    //   Email: ${guestData.email}
    //   Phone: ${guestData.phone}
    //   Attending: ${guestData.attending}
    //   Total Guests: ${guestData.totalGuests}
    //   Message: ${guestData.message}
    // `,
    // };

    //   // Send email
    //   return mailTransport.sendMail(mailOptions)
    //       .then(() => {
    //         console.log("Email sent to");
    //       })
    //       .catch((error) => {
    // console.error("There was an error while sending the email:", error);
    //       });

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: "api",
      key:
        process.env.MAILGUN_API_KEY ||
        "51c4da265e5d6bf831926bbaa93bde51-181449aa-3cf67548",
    });

    mg.messages
      .create("sandbox8f4ab377f98b441da6ca5d9e46901638.mailgun.org", {
        from: "mailgun@sandbox8f4ab377f98b441da6ca5d9e46901638.mailgun.org",
        to: ["11arshaan@gmail.com"],
        subject: `New RSVP: ${guestData.name}`,
        text: `
        Name: ${guestData.name}
        Email: ${guestData.email}
        Phone: ${guestData.phone}
        Attending: ${guestData.attending}
        Total Guests: ${guestData.totalGuests}
        Message: ${guestData.message}
      `,
        html: `
        <p>Name: ${guestData.name}</p>
        <p>Email: ${guestData.email}</p>
        <p>Phone: ${guestData.phone}</p>
        <p>Attending: ${guestData.attending}</p>
        <p>Total Guests: ${guestData.totalGuests}</p>
        <p>Message: ${guestData.message}</p>
      `,
      })
      .then((msg) => console.log(msg)) // logs response data
      .catch((err) => console.log(err)); // logs any error
  });
