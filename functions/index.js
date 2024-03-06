const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

exports.sendEmailOnRSVP = functions.firestore
    .document("guests/{guestId}")
    .onCreate(async (snap, context) => {
      const guestData = snap.data();

      
      // Prepare nodemailer transport object
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "amaritandarsheen@gmail.com",
          pass: "ebhavrwkhpmszmtx",
        },
      });


      // Prepare email data
      const mailOptions = {
        from: "amaritandarsheen@gmail.com",
        to: "11arshaan@gmail.com,laadikour@hotmail.com,Arsheen.kour@yahoo.com",
        subject: "New RSVP: " + guestData.name + "",
        text: `
      Name: ${guestData.name}
      Email: ${guestData.email}
      Phone: ${guestData.phone}
      Attending: ${guestData.attending}
      Total Guests: ${guestData.totalGuests}
      Message: ${guestData.message}
    `,
      };

      //   // Send email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error:", error);
        } else {
          console.log("Email sent:", info.response);
        }
      });
    });
