// Variables

// Functions

// Shortcut for selecting element by ids
function r_e(id) {
  return document.querySelector(`#${id}`);
}

// Start Sign Up Functions
// user clicks the button, display the modal
r_e("signUpBtn").addEventListener("click", () => {
  r_e("signUpModal").classList.add("is-active");
});

// when the user clicks on the backgorund, hide the modal
r_e("signUpModalBg").addEventListener("click", () => {
  r_e("signUpModal").classList.remove("is-active");
});

// user clicks the signup button and the modal appears (DONE)
r_e("signUpForm").addEventListener("submit", (e) => {
  // prevent the page from auto-refresh
  e.preventDefault();
  // Get the profile pic
  let profilePic = r_e("profilePic_su").files[0];
  let profileImage = new Date() + "_" + profilePic.name;
  const task = ref.child(profileImage).put(profilePic);
  task
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .then((url) => {
      // get the email and password to submit
      let email = r_e("email_su").value;
      let password = r_e("password_su").value;

      let newUser = {
        f_name: r_e("f_name_su").value,
        l_name: r_e("l_name_su").value,
        username: r_e("username_su").value,
        email: r_e("email_su").value,
        a_type: r_e("a_type_su").value,
        date_account_created: get_date(),
        profile_pic: url,
      };
      // send these to firebase
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          // console.log("user created");
          configure_message_bar(`Welcome ${auth.currentUser.email}`);
          // reset the form
          document.querySelector("#signupform").reset();
          // close (hide) the modal
          r_e("signupmodal").classList.remove("is-active");
          // add the additional user information into the database
          db.collection("users").doc(auth.currentUser.uid).set(newUser);
          // db.collection("users").add(newUser);
          // Display their name in the Corner When Signed In
          // r_e("navBarEnd").innerHTML = `
          // <div class="navbar-item">
          //   <figure class="media-right mt-2">
          //     <p class="image is-48x48">
          //       <i class="fa-solid fa-user is-center fa-2x"></i>
          //     </p>
          //   </figure>
          //   <div class="button mt-1">${auth.currentUser.email}</div>
          // </div>
          // `;
          // User is signed in
          configure_message_bar(`${newUser.email} has successfully signed in.`);
          // Load The Member Homepage
          allPages.forEach((page) => {
            if (page.classList.contains("is-active")) {
              hidemodal(page);
            }
          });
          showmodal(homepage);
        })
        .catch((error) => {
          // do nothing, form clears
        });
    });
});

// End Sign Up Functions

// Start Sign Up Functions
// user clicks the button, display the modal
r_e("loginBtn").addEventListener("click", () => {
  r_e("loginModal").classList.add("is-active");
});

// when the user clicks on the backgorund, hide the modal
r_e("loginModalBg").addEventListener("click", () => {
  r_e("loginModal").classList.remove("is-active");
});

// Clear the form
r_e("resetsignup").addEventListener("click", () => {
  r_e("f_name_su").value = "";
  r_e("l_name_su").value = "";
  r_e("username_su").value = "";
  r_e("email_su").value = "";
  r_e("a_type_su").value = "";
  r_e("password_su").value = "";
  r_e("profilePic_su").value = "";
});

// End Sign Up Functions

// Start Login Modal
// user clicks the button, display the modal
r_e("loginbtn").addEventListener("click", () => {
  r_e("loginModal").classList.add("is-active");
});

// when the user clicks on the backgorund, hide the modal
r_e("loginModalBg").addEventListener("click", () => {
  r_e("loginModal").classList.remove("is-active");
});

// Clear the form
r_e("resetlogin").addEventListener("click", () => {
  r_e("loginemail").value = "";
  r_e("loginpassword").value = "";
});

// Sign in users
r_e("loginform").addEventListener("submit", (e) => {
  e.preventDefault();
  // get the email and password from the form
  let email = r_e("loginemail").value;
  let password = r_e("loginpassword").value;
  // Send email and password to firebase for verification (authentication)
  auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      configure_message_bar(`${email} has successfully signed in`);
      // Load The Member Homepage
      allPages.forEach((page) => {
        if (page.classList.contains("is-active")) {
          hidemodal(page);
        }
      });
      showmodal(homepage);
      // reset the form
      r_e("loginform").reset();
      // close (hide) the modal
      r_e("loginModal").classList.remove("is-active");
    })
    .catch((error) => {
      // If login fails, display an error message and exit the function
      configure_message_bar("Invalid email or password");
      // reset the form
      r_e("loginform").reset();
      // close (hide) the modal
      r_e("loginModal").classList.remove("is-active");
      return;
    });
});

// End Login Modal

// keep track of user authenticaiton status
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    hidemodal(indexpage);
    showmodal(memhomepage);
    // configure_message_bar(`${user.email} has successfully signed in.`);
    // Configure navbar
    configure_nav_bar(user.email);
    // log the login to the user account in the database
    db.collection("users")
      .get()
      .then((users) => {
        users.forEach((currentuser) => {
          if (user.email == currentuser.data().email) {
            // Get the current date and time
            var currentDate = new Date();

            // Get the day, month, and year
            var day = currentDate.getDate();
            var month = currentDate.getMonth() + 1; // January is 0
            var year = currentDate.getFullYear();

            // Get the hours and minutes
            var hours = currentDate.getHours();
            var minutes = currentDate.getMinutes();

            // Determine AM or PM
            var ampm = hours < 12 ? "AM" : "PM";

            // Convert hours from military time to standard time
            if (hours > 12) {
              hours -= 12;
            } else if (hours === 0) {
              hours = 12;
            }

            // Add leading zeroes to minutes
            if (minutes < 10) {
              minutes = "0" + minutes;
            }

            // Add leading zeroes to month and day
            if (day < 10) {
              day = "0" + day;
            }
            if (month < 10) {
              month = "0" + month;
            }

            // Format the date and time string
            var dateTime =
              month +
              "/" +
              day +
              "/" +
              year +
              " " +
              hours +
              ":" +
              minutes +
              " " +
              ampm;

            // pdate the database
            update_firebase("users", currentuser.id, "last_login", dateTime);
          }
        });
      });

    // pause_videos();
    // Update the Red Header
    r_e("redPageTitle").innerHTML = "MEMBER HOME";
    // Highlight the selected nav element
    allPages.forEach((page) => {
      if (page.classList.contains("is-active")) {
        let temp = page.id.substring(0, 5);
        allBtns.forEach((btn) => {
          let tempbtn = btn.id.substring(0, 5);
          if (tempbtn == temp) {
            btn.classList.add("is-active");
          }
        });
      }
    });
  } else {
    // User is signed out
    showmodal(homepage);
    r_e("homepage").classList.add("is-active");
    // configure_message_bar(`You have sucessfully signed out.`);
    // Highlight the selected nav element
    allPages.forEach((page) => {
      if (page.classList.contains("is-active")) {
        let temp = page.id.substring(0, 5);
        allBtns.forEach((btn) => {
          let tempbtn = btn.id.substring(0, 5);
          if (tempbtn == temp) {
            btn.classList.add("is-active");
          }
        });
      }
    });
  }
});
