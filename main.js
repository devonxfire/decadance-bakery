const firebaseConfig = {
  apiKey: "AIzaSyCesd5N5kH7WFcBcC3Fyz3Ldbk0XMirDCY",
  authDomain: "decadance-bakery.firebaseapp.com",
  databaseURL: "https://decadance-bakery-default-rtdb.firebaseio.com",
  projectId: "decadance-bakery",
  storageBucket: "decadance-bakery.appspot.com",
  messagingSenderId: "368786589018",
  appId: "1:368786589018:web:eb44fa37542b888459df63",
};

firebase.initializeApp(firebaseConfig);

// Reference database
const contactFormDB = firebase.database().ref("contactForm");

document.querySelector("#contact-form").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  const name = getInputValues("name");
  const company = getInputValues("company");
  const email = getInputValues("email");
  const phone = getInputValues("phone");
  const message = getInputValues("message");

  // Save message
  saveMessage(name, company, email, phone, message);

  document.querySelector(".message-sent").style.display = "block";

  setTimeout(() => {
    document.querySelector(".message-sent").style.display = "none";
  }, 3000);

  // Reset Form
  document.getElementById("contact-form").reset();
}
// Save message to firebase
function saveMessage(name, company, email, phone, message) {
  const newContactForm = contactFormDB.push();
  newContactForm.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message,
  });
}

// Function to get form values

function getInputValues(id) {
  return document.getElementById(id).value;
}

// Scroll button to top

const button = document.querySelector(".scroll-to-top");

const refreshButtonVisibilty = () => {
  if (document.documentElement.scrollTop < 400) {
    button.style.display = "none";
  } else {
    button.style.display = "block";
  }
};

refreshButtonVisibilty();

button.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
  refreshButtonVisibilty();
});
