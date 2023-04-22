// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";

import {
  getFirestore,
  addDoc,
  getDocs,
  collection,
  query,
  onSnapshot,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVy6zWPlRlOWUluzlmgCEoZmIOr94VUY8",
  authDomain: "aa-wedding-54505.firebaseapp.com",
  projectId: "aa-wedding-54505",
  storageBucket: "aa-wedding-54505.appspot.com",
  messagingSenderId: "354176507771",
  appId: "1:354176507771:web:861d69a9571e32d6a167de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



// add document to collection
export async function addGuest(
  name,
  email,
  phone = "n/a",
  attending,
  guests = 0,
  message = "n/a"
) {
  try {
    const docRef = await addDoc(collection(db, "guests"), {
      name: name,
      email: email,
      phone: phone,
      attending: attending,
      guests: guests,
      message: message,
    });

    console.log("Document written with ID: ", docRef.id);

    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
}

// get guests from collection
export function getGuests(callback) {
  const q = query(collection(db, "guests"));
  return onSnapshot(q, (querySnapshot) => {
    const guestList = [];
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      guestList.push({ id: doc.id, data: doc.data() });
    });
    callback(guestList);
  });
}


