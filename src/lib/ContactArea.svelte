<script>
  // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, push } from "firebase/database";
import { database } from '$lib/firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAV9cbQPddGS927a-XJkgkMdiwwZNUbV9I",
//   authDomain: "petermark-9ba50.firebaseapp.com",
//   databaseURL: "https://petermark-9ba50-default-rtdb.firebaseio.com",
//   projectId: "petermark-9ba50",
//   storageBucket: "petermark-9ba50.firebasestorage.app",
//   messagingSenderId: "892056005886",
//   appId: "1:892056005886:web:f9d7858357d71cf9ea89af"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

 // Form data
  let formData = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };


   // Submit function
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      // Push data to Firebase Realtime Database
      const dbRef = ref(database, "contacts"); // Reference to the "contacts" node
      await push(dbRef, formData);

      // Reset form data
      formData = {
        name: "",
        email: "",
        subject: "",
        message: ""
      };

      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your message. Please try again.");
    }
  };

</script>


<section id="contact-area" class="cr-section contact-area section-padding-xlg bg-white">
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-xl-6 col-lg-6">
        <div class="section-title">
          <h2>Contact Form</h2>
          <p>
            Have a project in mind or want to capture your special moments? 
            Fill out the form below, and we’ll get back to you as soon as possible.
          </p>
        </div>
        <form on:submit={handleSubmit} class="photoghor-form">
          <div class="photoghor-form-inner">
            <div class="photoghor-form-input photoghor-form-input-half">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                bind:value={formData.name}
                required
              />
            </div>
            <div class="photoghor-form-input photoghor-form-input-half">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                bind:value={formData.email}
                required
              />
            </div>
            <div class="photoghor-form-input">
              <input
                type="text"
                name="subject"
                placeholder="Subject*"
                bind:value={formData.subject}
                required
              />
            </div>
            <div class="photoghor-form-input">
              <textarea
                name="message"
                cols="30"
                rows="5"
                placeholder="Message"
                bind:value={formData.message}
              ></textarea>
            </div>
            <div class="photoghor-form-input">
              <button type="submit" class="button" data-content="Submit">
                <span>Submit</span>
              </button>
            </div>
          </div>
        </form>
        <p class="form-message"></p>
      </div>
      <div class="col-xl-5 col-lg-6">
        <div class="contact-info-wrapper">
          <div class="section-title">
            <h2>Quick Contact</h2>
            <p>
              Let’s connect! Whether you have questions, want to book a session, or just want to say hello, 
              here’s how you can reach us.
            </p>
          </div>
          <div class="contact-info">
            <div class="single-info">
              <h5>PHONE NUMBER</h5>
              <p>
                <a href="tel:+18622185075">+1 (862) 218-5075</a>
              </p>
            </div>
            <div class="single-info">
              <h5>E-MAIL ADDRESS</h5>
              <p>
                <a href="mailto:info@tosinpeter.com">info@tosinpeter.com</a> / 
                <a href="mailto:bookings@tosinpeter.com">bookings@tosinpeter.com</a>
              </p>
            </div>
            <div class="single-info">
              <h5>OUR ADDRESS</h5>
              <p>
                Tosin Peter Photography Studio, <br>
                123 Creative Avenue, <br>
                Baltimore, Maryland, USA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>