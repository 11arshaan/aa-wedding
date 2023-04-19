const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


admin.initializeApp();

// Configure Nodemailer and your email credentials
const transporter = nodemailer.createTransport({
  service: "gmail", // or another email service
  auth: {
    user: "amaritandarsheen@gmail.com",
    pass: "aaweddingyay123!",
  },
});

exports.sendEmailOnRSVP = functions.firestore
    .document("guests/{guestId}")
    .onCreate(async (snap, context) => {
      const guestData = snap.data();

      // Prepare email data
      const mailOptions = {
        from: "amaritandarsheen@gmail.com",
        to: "11arshaan@gmail.com",
        subject: "New RSVP Submission",
        text: `
        Name: ${guestData.name}
        Email: ${guestData.email}
        Phone: ${guestData.phone}
        Attending: ${guestData.attending}
        Total Guests: ${guestData.totalGuests}
        Message: ${guestData.message}
      `,
      };

      // Send email
      try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
      } catch (error) {
        console.error("Error sending email:", error);
      }
    });
