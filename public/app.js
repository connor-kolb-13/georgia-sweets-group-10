// Variables

// Functions

// Navbar Work

// Select the burger icon element
const burger = document.querySelector("#burgerIcon");

// Select the navbar menu element
const menu = document.querySelector(".navbar-menu");

// Add a click event listener to the burger icon
burger.addEventListener("click", () => {
  // Toggle the is-active class on the navbar menu element
  menu.classList.toggle("is-active");
});

// Adding navbar functions
let homebtn = r_e("homebtn");
let shopbtn = r_e("shopbtn");
let gallerybtn = r_e("gallerybtn");
let dashboardbtn = r_e("dashboardbtn");
let aboutbtn = r_e("aboutbtn");
let contactbtn = r_e("contactbtn");
let reportanissuebtn = r_e("reportanissuebtn");

let = allBtns = [
  homebtn,
  shopbtn,
  gallerybtn,
  dashboardbtn,
  aboutbtn,
  contactbtn,
  reportanissuebtn,
];

let homepage = r_e("homepage");
let shoppage = r_e("shoppage");
let gallerypage = r_e("gallerypage");
let dashboardpage = r_e("dashboardpage");
let aboutpage = r_e("aboutpage");
let contactpage = r_e("conactpage");
let reportanissuepage = r_e("reportanissuepage");

let = allPages = [
  homepage,
  shoppage,
  gallerypage,
  dashboardpage,
  aboutpage,
  contactpage,
  reportanissuepage,
];

function showmodal(mymodal) {
  if (mymodal.classList.contains("is-hidden")) {
    mymodal.classList.remove("is-hidden");
  }
  mymodal.classList.add("is-active");
}

function hidemodal(mymodal) {
  if (mymodal.classList.contains("is-active")) {
    mymodal.classList.remove("is-active");
  }
  mymodal.classList.add("is-hidden");
}

// Public Home Page
document.querySelector("#homebtn").addEventListener("click", () => {
  // Hide all other pages
  allPages.forEach((page) => {
    if (page.classList.contains("is-active")) {
      hidemodal(page);
    }
  });
  showmodal(homepage);
  // Remove the is-active from the prior page
  allBtns.forEach((btn) => {
    if (btn.classList.contains("is-active")) {
      btn.classList.remove("is-active");
    }
  });
  // Update the Navbar
  homebtn.classList.add("is-active");
  // Hide the menu when burger icon was clicked
  menu.classList.toggle("is-active");
});

// Public shop Page
document.querySelector("#shopbtn").addEventListener("click", () => {
  // Hide all other pages
  allPages.forEach((page) => {
    if (page.classList.contains("is-active")) {
      hidemodal(page);
    }
  });
  showmodal(shoppage);
  hidemodal(homepage);
  // Remove the is-active from the prior page
  allBtns.forEach((btn) => {
    if (btn.classList.contains("is-active")) {
      btn.classList.remove("is-active");
    }
  });
  // Update the Navbar
  shopbtn.classList.add("is-active");
  // Hide the menu when burger icon was clicked
  menu.classList.toggle("is-active");
});

// Public gallery Page
document.querySelector("#gallerybtn").addEventListener("click", () => {
  // Hide all other pages
  allPages.forEach((page) => {
    if (page.classList.contains("is-active")) {
      hidemodal(page);
    }
  });
  showmodal(gallerypage);
  hidemodal(homepage);
  // Remove the is-active from the prior page
  allBtns.forEach((btn) => {
    if (btn.classList.contains("is-active")) {
      btn.classList.remove("is-active");
    }
  });
  // Update the Navbar
  gallerybtn.classList.add("is-active");
  // Hide the menu when burger icon was clicked
  menu.classList.toggle("is-active");
});

// Public dashboard Page
document.querySelector("#dashboardbtn").addEventListener("click", () => {
  // Hide all other pages
  allPages.forEach((page) => {
    if (page.classList.contains("is-active")) {
      hidemodal(page);
    }
  });
  showmodal(dashboardpage);
  hidemodal(homepage);
  // Remove the is-active from the prior page
  allBtns.forEach((btn) => {
    if (btn.classList.contains("is-active")) {
      btn.classList.remove("is-active");
    }
  });
  // Update the Navbar
  dashboardbtn.classList.add("is-active");
  // Hide the menu when burger icon was clicked
  menu.classList.toggle("is-active");
});

// Public about Page
document.querySelector("#aboutbtn").addEventListener("click", () => {
  // Hide all other pages
  allPages.forEach((page) => {
    if (page.classList.contains("is-active")) {
      hidemodal(page);
    }
  });
  showmodal(aboutpage);
  hidemodal(homepage);
  // Remove the is-active from the prior page
  allBtns.forEach((btn) => {
    if (btn.classList.contains("is-active")) {
      btn.classList.remove("is-active");
    }
  });
  // Update the Navbar
  aboutbtn.classList.add("is-active");
  // Hide the menu when burger icon was clicked
  menu.classList.toggle("is-active");
});

// Public contact Page
document.querySelector("#contactbtn").addEventListener("click", () => {
  // Hide all other pages
  allPages.forEach((page) => {
    if (page.classList.contains("is-active")) {
      hidemodal(page);
    }
  });
  showmodal(contactpage);
  hidemodal(homepage);
  // Remove the is-active from the prior page
  allBtns.forEach((btn) => {
    if (btn.classList.contains("is-active")) {
      btn.classList.remove("is-active");
    }
  });
  // Update the Navbar
  contactbtn.classList.add("is-active");
  // Hide the menu when burger icon was clicked
  menu.classList.toggle("is-active");
});

// Public report an issue Page
document.querySelector("#reportanissuebtn").addEventListener("click", () => {
  // Hide all other pages
  allPages.forEach((page) => {
    if (page.classList.contains("is-active")) {
      hidemodal(page);
    }
  });
  showmodal(reportanissuepage);
  hidemodal(homepage);
  // Remove the is-active from the prior page
  allBtns.forEach((btn) => {
    if (btn.classList.contains("is-active")) {
      btn.classList.remove("is-active");
    }
  });
  // Update the Navbar
  reportanissuebtn.classList.add("is-active");
  // Hide the menu when burger icon was clicked
  menu.classList.toggle("is-active");
});

// Example of how to use function for reference when working
// get_firebase_data("users", "0G3Om9lyf9coc2wkYQMQ", "f_name").then(
//   (name) => {
// console.log(name);    would log the firt name corredsponding to that id
//   }
// );

// Get the requested data from the database
function get_firebase_data(collection, documentid, field) {
  return new Promise((resolve, reject) => {
    // Reference the specified collection and document
    let docRef = db.collection(collection).doc(documentid);
    // Get the data from the specified field
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          // Resolve the promise with the data from the specified field
          resolve(doc.data()[field]);
        } else {
          // Reject the promise if the document does not exist
          reject("Document does not exist");
        }
      })
      .catch((error) => {
        // Reject the promise if there was an error while accessing the data
        reject(error);
      });
  });
}

// Update the database
function update_firebase(collection, document, field, newValue) {
  firebase
    .firestore()
    .collection(collection)
    .doc(document)
    .update({
      [field]: newValue,
    })
    .then(() => {
      // console.log(
      //   `Document ${document} in collection ${collection} was successfully updated`
      // );
    })
    .catch((error) => {
      // console.error(`Error writing document: ${error}`);
    });
}

// Shortcut for selecting element by ids
function r_e(id) {
  return document.querySelector(`#${id}`);
}

// Show a modal
function showmodal(mymodal) {
  if (mymodal.classList.contains("is-hidden")) {
    mymodal.classList.remove("is-hidden");
  }
  mymodal.classList.add("is-active");
}

// hide a modal
function hidemodal(mymodal) {
  if (mymodal.classList.contains("is-active")) {
    mymodal.classList.remove("is-active");
  }
  mymodal.classList.add("is-hidden");
}

// Get the current date
function get_date() {
  let timeStamp = Date.now();
  let dateObj = new Date(timeStamp);
  let month = dateObj.getMonth() + 1;
  let year = dateObj.getFullYear();
  let date = dateObj.getDate();
  return `${month}/${date}/${year}`;
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
      console.log(email, " ", password);
      let newUser = {
        f_name: r_e("f_name_su").value,
        l_name: r_e("l_name_su").value,
        username: r_e("username_su").value,
        email: r_e("email_su").value,
        a_type: r_e("a_type_su").value,
        date_account_created: get_date(),
        profile_pic: url,
      };

      console.log(newUser);

      // send these to firebase
      // send these to firebase
      auth.createUserWithEmailAndPassword(email, password).then((user) => {
        // console.log("user created");
        configure_message_bar(`Welcome ${auth.currentUser.email}`);
        // reset the form
        document.querySelector("#signUpForm").reset();
        // close (hide) the modal
        r_e("signUpModal").classList.remove("is-active");

        // add the additional user information into the database
        // Store the object in the database
        db.collection("users")
          .doc(newUser.email)
          .set(newUser)
          .then(() => {
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
            configure_message_bar(
              `${newUser.email} has successfully signed in.`
            );
            // hide the sign up form
            r_e("signUpModal").classList.remove("is-active");
            // Load The Member Homepage
            allPages.forEach((page) => {
              if (page.classList.contains("is-active")) {
                hidemodal(page);
              }
            });
            showmodal(homepage);
          })
          .catch((error) => {
            console.error("Error adding user: ", error);
          });
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
r_e("loginBtn").addEventListener("click", () => {
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

// Sign Out Modal
r_e("logOutBtn").addEventListener("click", () => {
  auth.signOut().then(() => {
    // console.log("user signed out");
    configure_message_bar(`You have successfully signed out!`);
    allPages.forEach((page) => {
      if (page.classList.contains("is-active")) {
        hidemodal(page);
      }
    });
    showmodal(homepage);
  });
});

// keep track of user authenticaiton status
auth.onAuthStateChanged((user) => {
  if (user) {
    showmodal(homepage);
    // configure_message_bar(`${user.email} has successfully signed in.`);
    // Configure navbar
    // configure_nav_bar(user.email);
    r_e("signUpBtn").classList.add("is-hidden");
    r_e("loginBtn").classList.add("is-hidden");
    r_e("logOutBtn").classList.remove("is-hidden");
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
    // Highlight the selected nav element
    allPages.forEach((page) => {
      if (page.classList.contains("is-active")) {
        let temp = page.id.substring(0, 4);
        allBtns.forEach((btn) => {
          let tempbtn = btn.id.substring(0, 4);
          if (tempbtn == temp) {
            btn.classList.add("is-active");
          }
        });
      }
    });
  } else {
    // User is signed out
    showmodal(homepage);
    // configure_nav_bar(user.email);
    r_e("signUpBtn").classList.remove("is-hidden");
    r_e("loginBtn").classList.remove("is-hidden");
    r_e("logOutBtn").classList.add("is-hidden");
    r_e("homepage").classList.add("is-active");
    // configure_message_bar(`You have sucessfully signed out.`);
    // Highlight the selected nav element
    allPages.forEach((page) => {
      if (page.classList.contains("is-active")) {
        let temp = page.id.substring(0, 4);
        allBtns.forEach((btn) => {
          let tempbtn = btn.id.substring(0, 4);
          if (tempbtn == temp) {
            btn.classList.add("is-active");
          }
        });
      }
    });
  }
});

// Message Bar Code
function configure_message_bar(msg) {
  r_e("message_bar").innerHTML = msg;
  // make the message bar hidden
  r_e("message_bar").classList.remove("is-hidden");
  // after 2 seconds, hide the bar again
  setTimeout(() => {
    r_e("message_bar").classList.add("is-hidden");
    r_e("message_bar").innerHTML = "";
  }, 2000);
}
