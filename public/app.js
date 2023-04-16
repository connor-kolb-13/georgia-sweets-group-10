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

function r_e(id) {
  return document.querySelector(`#${id}`);
}

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
let shoppage = r_e("shopPage");
let gallerypage = r_e("gallerypage");
let dashboardpage = r_e("dashboardpage");
let aboutpage = r_e("publicLandingPage");
let contactpage = r_e("conactpage");
let reportanissuepage = r_e("reportanissuepage");
let manageshoppage = r_e("manageshoppage");
let managegallerypage = r_e("managegallerypage");
let manageuserspage = r_e("manageuserspage");
let manageaboutuspage = r_e("manageaboutuspage");

let = allPages = [
  homepage,
  shoppage,
  gallerypage,
  dashboardpage,
  aboutpage,
  contactpage,
  reportanissuepage,
  manageshoppage,
  managegallerypage,
  manageuserspage,
  manageaboutuspage,
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
  load_data("gallery_images", "loc", "gallerypage");
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
r_e("loginBtn").addEventListener("click", () => {
  r_e("loginModal").classList.add("is-active");
});

// when the user clicks on the backgorund, hide the modal
r_e("loginModalBg").addEventListener("click", () => {
  r_e("loginModal").classList.remove("is-active");
});

// Clear the form
r_e("resetsignup").addEventListener("click", (e) => {
  e.preventDefault();
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
r_e("resetlogin").addEventListener("click", (e) => {
  e.preventDefault();
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

//Dashboard JS
function mngShopBtn() {
  allPages.forEach((page) => {
    if (page.classList.contains("is-active")) {
      hidemodal(page);
    }
  });
  showmodal(manageshoppage);
  hidemodal(dashboardpage);
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
}
function mngGalleryBtn() {
  allPages.forEach((page) => {
    if (page.classList.contains("is-active")) {
      hidemodal(page);
    }
  });
  showmodal(managegallerypage);
  hidemodal(dashboardpage);
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
}
function mngUsersBtn() {
  allPages.forEach((page) => {
    if (page.classList.contains("is-active")) {
      hidemodal(page);
    }
  });
  showmodal(manageuserspage);
  // Show users
  show_users();
  hidemodal(dashboardpage);
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
}
function mngAbtUsBtn() {
  allPages.forEach((page) => {
    if (page.classList.contains("is-active")) {
      hidemodal(page);
    }
  });
  showmodal(manageaboutuspage);
  hidemodal(dashboardpage);
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
}

function backToDashboardBtn() {
  allPages.forEach((page) => {
    if (page.classList.contains("is-active")) {
      hidemodal(page);
    }
  });
  showmodal(dashboardpage);
  // Remove the is-active from the prior page
  allBtns.forEach((btn) => {
    if (btn.classList.contains("is-active")) {
      btn.classList.remove("is-active");
    }
  });
  // Hide the menu when burger icon was clicked
  menu.classList.toggle("is-active");
}

// Example of how to use function for reference when working
// get_user_info(auth.currentUser.email, "full_name").then(
//   (name) => {
// console.log(name);    would log the full name (First Last) of the current user
//   }
// );

// Function to find the requested field of the user with the given email
function get_user_info(email, field) {
  let val = "";
  return new Promise((res, rej) => {
    db.collection("users")
      .where("email", "==", email)
      .get()
      .then((data) => {
        let mydocs = data.docs;
        // Check if user with matching email found
        if (mydocs.length == 0) {
          alert("user not found");
          return;
        }

        for (i = 0; i < mydocs.length; i++) {
          // User is found, return the requested field
          switch (field) {
            case "email":
              alert("trying to get the email");
              res(mydocs[0].data().email);
              break;
            case "f_name":
              res(mydocs[0].data().f_name);
              break;
            case "l_name":
              res(mydocs[0].data().l_name);
              break;
            case "a_type":
              res(mydocs[0].data().a_type);
              break;
            case "profile_pic":
              res(mydocs[0].data().profile_pic);
              break;
            case "username":
              res(mydocs[0].data().username);
              break;
            case "last_login":
              res(mydocs[0].data().last_login);
              break;
            case "date_account_created":
              res(mydocs[0].data().date_account_created);
              break;
            case "full_name":
              res(`${mydocs[0].data().f_name} ${mydocs[0].data().l_name}`);
              break;
            default:
              res(mydocs[0].data().email);
              break;
          }
        }
      });
    // End of Promise
    // Set the delay
    // setTimeout(() => {
    //   // Return the value
    //   return val;
    // }, 5000);
  });
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

      // console.log(newUser);
      // Hide Dashboard Tab if Customer Account
      if (newUser.a_type == "Customer") {
        // Hide the dashboard tab
        r_e("dashboardbtn").classList.add("is-hidden");
      }

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
r_e("resetsignup").addEventListener("click", (e) => {
  e.preventDefault();
  r_e("f_name_su").value = "";
  r_e("l_name_su").value = "";
  r_e("username_su").value = "";
  r_e("email_su").value = "";
  r_e("a_type_su").value = "";
  r_e("password_su").value = "";
  r_e("profilePic_su").value = "";
});
// End Sign Up Functions

// keep track of user authenticaiton status
auth.onAuthStateChanged((user) => {
  if (user) {
    r_e("homepage").classList.add("is-active");
    // Show profile info
    if (r_e("profileInfo").classList.contains("is-hidden")) {
      r_e("profileInfo").classList.remove("is-hidden");
    }
    configure_message_bar(`${user.email} has successfully signed in.`);
    // Hiding Dashboard Tab From Non-Admin Accounts
    get_user_info(auth.currentUser.email, "a_type").then((type) => {
      // console.log(type);
      if (type == "Customer") {
        // Hide the dashboard tab
        r_e("dashboardbtn").classList.add("is-hidden");
      } else {
        // Else hide nothing (make sure the dashboard tab is displayed)
        if (r_e("dashboardbtn").classList.contains("is-hidden")) {
          r_e("dashboardbtn").classList.remove("is-hidden");
        }
      }
      r_e("signUpBtn").classList.add("is-hidden");
      r_e("loginBtn").classList.add("is-hidden");
      r_e("logOutBtn").classList.remove("is-hidden");
      // log the login to the user account in the database
      db.collection("users")
        .get()
        .then((users) => {
          users.forEach((currentuser) => {
            if (user.email == currentuser.data().email) {
              let dateTime = get_current_timestamp();
              // update the database
              update_firebase("users", currentuser.id, "last_login", dateTime);
              // Show name and pic in upper corner
              get_user_info(auth.currentUser.email, "f_name").then((name) => {
                get_user_info(auth.currentUser.email, "profile_pic").then(
                  (pic) => {
                    document.getElementById("profilePicture").innerHTML = `
                  <figure class="image is-32x32 m-auto" >
                      <img class="is-rounded is-clickable" id="profileinfoicon" src="${pic}">
                  </figure>
                  
                  `;
                    document.getElementById("nameCorner").innerHTML = name;
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
                );
              });
            }
          });
        });
    });
  } else {
    // User is signed out
    // Hide the dashboard tab
    r_e("dashboardbtn").classList.add("is-hidden");
    // hide profile info
    if (!r_e("profileInfo").classList.contains("is-hidden")) {
      r_e("profileInfo").classList.add("is-hidden");
    }
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

// show the profile information modal when the user icon is clicked (with info loaded in)
r_e("profileInfo").addEventListener("click", () => {
  // Get the details and display them
  get_user_info(auth.currentUser.email, "f_name").then((first) => {
    get_user_info(auth.currentUser.email, "l_name").then((last) => {
      get_user_info(auth.currentUser.email, "username").then((username) => {
        get_user_info(auth.currentUser.email, "a_type").then((account) => {
          get_user_info(auth.currentUser.email, "profile_pic").then((pic) => {
            r_e("f_name_pi").value = first;
            r_e("l_name_pi").value = last;
            r_e("username_pi").value = username;
            r_e("email_pi").value = auth.currentUser.email;
            r_e("a_type_pi").value = account;
            document.getElementById("profileInfoProfilePic").src = pic;
            r_e("profileinformationmodal").classList.add("is-active");
          });
        });
      });
    });
  });
});

// Hide the modal when the background is clicked
r_e("profileinfomodalbg").addEventListener("click", () => {
  r_e("profileinformationmodal").classList.remove("is-active");
});

// Update the information if they choose toprofile
r_e("profileinfoform").addEventListener("submit", (e) => {
  e.preventDefault();
  // find the current user in the users collection of the database
  let email = auth.currentUser.email;

  db.collection("users")
    .get()
    .then((data) => {
      let mydocs = data.docs;
      mydocs.forEach((doc) => {
        if (doc.data().email == email) {
          // found the right user
          // get the new info
          let newInfo = {
            a_type: r_e("a_type_pi").value,
            email: auth.currentUser.email,
            f_name: r_e("f_name_pi").value,
            l_name: r_e("l_name_pi").value,
            username: r_e("username_pi").value,
            date_account_created: doc.data().date_account_created,
            last_login: doc.data().last_login,
            profile_pic: doc.data().profile_pic,
          };
          // update the data
          db.collection("users").doc(doc.id).update(newInfo);
          // Hide the form
          r_e("profileinformationmodal").classList.remove("is-active");
          // Show completetion message
          configure_message_bar("Account successfully upadated!");
        }
      });
    });
});

// Timestamp function
function get_current_timestamp() {
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
    month + "/" + day + "/" + year + " " + hours + ":" + minutes + " " + ampm;
  return dateTime;
}

// Shop Page Work
r_e("addShopItemBtn").addEventListener("click", () => {
  r_e("addShopItemModal").classList.add("is-active");
});

r_e("addShopItemModalBg").addEventListener("click", () => {
  r_e("addShopItemModal").classList.remove("is-active");
});

// Add the shop item to the database
r_e("addShopItemForm").addEventListener("submit", (e) => {
  // prevent the page from auto-refresh
  e.preventDefault();
  // Get the main picture
  let mainPic = r_e("addShopItemMainPic").files[0];
  let mainImage = new Date() + "_" + mainPic.name;
  const task = ref.child(mainImage).put(mainPic);
  let task1 = "";
  let task2 = "";
  let task3 = "";
  let task4 = "";
  let task5 = "";
  // Check for supplement pictures
  if (r_e("addShopItemSupPic1").files[0] != null) {
    // One Sup Pic Submitted
    let supPic1 = r_e("addShopItemSupPic1").files[0];
    let supImage1 = new Date() + "_" + supPic1.name;
    task1 = ref.child(supImage1).put(supPic1);
  }
  if (r_e("addShopItemSupPic2").files[0] != null) {
    // Two Sup Pic Submitted
    let supPic2 = r_e("addShopItemSupPic2").files[0];
    let supImage2 = new Date() + "_" + supPic2.name;
    task2 = ref.child(supImage2).put(supPic2);
  }
  if (r_e("addShopItemSupPic3").files[0] != null) {
    // Three Sup Pic Submitted
    let supPic3 = r_e("addShopItemSupPic3").files[0];
    let supImage3 = new Date() + "_" + supPic3.name;
    task3 = ref.child(supImage3).put(supPic3);
  }
  if (r_e("addShopItemSupPic4").files[0] != null) {
    // Four Sup Pic Submitted
    let supPic4 = r_e("addShopItemSupPic4").files[0];
    let supImage4 = new Date() + "_" + supPic4.name;
    task4 = ref.child(supImage4).put(supPic4);
  }
  if (r_e("addShopItemSupPic5").files[0] != null) {
    // Five Sup Pic Submitted
    let supPic5 = r_e("addShopItemSupPic5").files[0];
    let supImage5 = new Date() + "_" + supPic5.name;
    task5 = ref.child(supImage5).put(supPic5);
  }
  let sup_pics = [];

  for (let index = 1; index < 6; index++) {
    switch (index) {
      case 1:
        if (typeof task1 != "string") {
          task1
            .then((snapshot) => snapshot.ref.getDownloadURL())
            .then((url) => {
              sup_pics.push(url);
            });
        }
        break;
      case 2:
        if (typeof task2 != "string") {
          task2
            .then((snapshot) => snapshot.ref.getDownloadURL())
            .then((url) => {
              sup_pics.push(url);
            });
        }
        break;
      case 3:
        if (typeof task3 != "string") {
          task3
            .then((snapshot) => snapshot.ref.getDownloadURL())
            .then((url) => {
              sup_pics.push(url);
            });
        }
        break;
      case 4:
        if (typeof task4 != "string") {
          task4
            .then((snapshot) => snapshot.ref.getDownloadURL())
            .then((url) => {
              sup_pics.push(url);
            });
        }
        break;
      case 5:
        if (typeof task5 != "string") {
          task5
            .then((snapshot) => snapshot.ref.getDownloadURL())
            .then((url) => {
              sup_pics.push(url);
            });
        }
        break;
      default:
        break;
    }
  }

  task
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .then((url) => {
      // get the information to submit
      let item = {
        product_name: r_e("addShopItemName").value,
        product_description: r_e("addShopItemDescription").value,
        current_inventory: r_e("addShopItemInventory").value,
        price: r_e("addShopItemRegPrice").value,
        sale_price: r_e("addShopItemSalePrice").value,
        on_sale: r_e("addShopItemOnSale").checked,
        main_pic: url,
        date_added: get_current_timestamp(),
        supplement_pics: sup_pics,
        added_by: auth.currentUser.email,
      };

      // Store the object in the database
      db.collection("products")
        .add(item)
        .then(() => {
          // Hide the form
          r_e("addShopItemModal").classList.remove("is-active");
          // Clear the form

          // Display Message
          configure_message_bar(`${item.product_name} successfully added!`);
        })
        .catch((error) => {
          // Display Message
          configure_message_bar(`Error adding ${item.product_name}`);
        });
    });
});

// Start Manage Users
// Start Manage Users
function show_users() {
  const PAGE_SIZE = 10;
  let currentPage = 0;
  let numPages = 0;

  function renderTable(startIndex, numToShow) {
    db.collection("users")
      .get()
      .then((data) => {
        let mydocs = data.docs;
        let html = "";

        let endIndex =
          numToShow > 0
            ? Math.min(startIndex + numToShow, mydocs.length)
            : mydocs.length;

        mydocs.slice(startIndex, endIndex).forEach((user, index) => {
          html += `
            <tr>
              <td>
                <figure class="image is-1by1 is-small">
                  <img class="is-rounded" src="${user.data().profile_pic}">
                </figure>
              </td>
              <td class="has-text-left">${user.data().f_name} ${
            user.data().l_name
          }</td>
              <td class="has-text-center">${user.data().email}</td>
              <td class="has-text-center">${user.data().username}</td>
              <td class="has-text-center">${
                user.data().date_account_created
              }</td>
              <td class="has-text-center">${user.data().last_login}</td>
              <td>
                <div class="buttons has-addons">
                  <button class="button" onclick="editUser('${
                    user.data().email
                  }')">Edit</button>
                  <!-- <button class="button is-danger is-selected">Delete</button> -->
                </div>  
              </td>
            </tr>
          `;
        });

        document.getElementById("users_table").innerHTML = html;
      });
  }

  function renderPageLinks() {
    let html = "";
    for (let i = 0; i < numPages; i++) {
      html += `
        <a class="pagination-link" data-page="${i}">${i + 1}</a>
      `;
    }

    document.getElementById("manageUsersPageLinks").innerHTML = html;
  }

  function showPage(pageNum) {
    let startIndex = pageNum * PAGE_SIZE;
    renderTable(startIndex, PAGE_SIZE);
    currentPage = pageNum;
    updateNavigation();
  }

  function updateNavigation() {
    let prevBtn = document.getElementById("fullStandingsPrevPage");
    let nextBtn = document.getElementById("fullStandingsNextPage");

    if (prevBtn) {
      prevBtn.disabled = currentPage === 0;
    }

    if (nextBtn) {
      nextBtn.disabled = currentPage === numPages - 1;
    }

    let pageLinks = document.querySelectorAll("#fullStandingsPageLinks a");
    pageLinks.forEach((link) => {
      link.classList.toggle(
        "is-current",
        parseInt(link.dataset.page) === currentPage
      );
    });
  }

  db.collection("users")
    .get()
    .then((data) => {
      numPages = Math.ceil(data.docs.length / PAGE_SIZE);
      renderPageLinks();
      showPage(0);
    });

  document.addEventListener("click", (event) => {
    if (event.target.id === "fullStandingsPrevPage") {
      showPage(currentPage - 1);
    } else if (event.target.id === "fullStandingsNextPage") {
      showPage(currentPage + 1);
    } else if (event.target.classList.contains("pagination-link")) {
      showPage(parseInt(event.target.dataset.page));
    }
  });
}

function editUser(email) {
  // Get the details and display them
  get_user_info(email, "f_name").then((first) => {
    get_user_info(email, "l_name").then((last) => {
      get_user_info(email, "username").then((username) => {
        get_user_info(email, "a_type").then((account) => {
          get_user_info(email, "profile_pic").then((pic) => {
            r_e("f_name_user_info").value = first;
            r_e("l_name_user_info").value = last;
            r_e("username_user_info").value = username;
            r_e("email_user_info").value = email;
            r_e("a_type_user_info").value = account;
            document.getElementById("userInfoProfilePic").src = pic;
            r_e("editUserModal").classList.add("is-active");
          });
        });
      });
    });
  });
}

// Update the information if they choose to
r_e("editUserForm").addEventListener("submit", (e) => {
  e.preventDefault();
  // find the current user in the users collection of the database
  let email = r_e("email_user_info").value;

  db.collection("users")
    .where("email", "==", email)
    .get()
    .then((data) => {
      let mydocs = data.docs;
      mydocs.forEach((doc) => {
        // get the new info
        let newInfo = {
          a_type: r_e("a_type_user_info").value,
          email: email,
          f_name: r_e("f_name_user_info").value,
          l_name: r_e("l_name_user_info").value,
          username: r_e("username_user_info").value,
          date_account_created: doc.data().date_account_created,
          last_login: doc.data().last_login,
          profile_pic: doc.data().profile_pic,
        };
        // update the data
        db.collection("users").doc(doc.id).update(newInfo);
        // Hide the form
        r_e("editUserModal").classList.remove("is-active");
        // Show the updated table
        show_users();
        // Update message bar
        configure_message_bar(
          `${r_e("username_user_info").value} successfully updated!`
        );
      });
    });
});

// Hide the edit user form
r_e("editUserModalBg").addEventListener("click", () => {
  r_e("editUserModal").classList.remove("is-active");
});

function confirmDeleteUser(email) {
  console.log("hello");
  r_e("confirmDeleteUserModal").classList.add("is-active");
  console.log(r_e("confirmDeleteUserModal").classList);
  r_e(
    "confirmDeleteMessage"
  ).innerHTML = `Are you sure you want to delete ${email}? WARNING this cannot be undone.`;

  r_e("confirmDeleteUser").addEventListener("click", () => {
    // Delete the user
    // Get the currently logged in user
    var user = firebase.auth().currentUser;
    console.log(user);
    // Call the delete method on the user object
    user
      .delete()
      .then(() => {
        // Hide all the modals
        r_e("confirmDeleteUserModal").classList.remove("is-active");
        r_e("profileinformationmodal").classList.remove("is-active");
        // User account deleted
        configure_message_bar("Account successfully deleted!");
        // Hide the profile pic
        r_e("profileInfo").classList.add("is-hidden");
      })
      .catch((error) => {
        // An error happened
        configure_message_bar("Fail to delete account.");
      });
  });
}

r_e("confirmDeleteModalBg").addEventListener("click", () => {
  r_e("confirmDeleteUserModal").classList.remove("is-active");
});

r_e("cancelDeleteUser").addEventListener("click", () => {
  r_e("confirmDeleteUserModal").classList.remove("is-active");
});

r_e("deleteUserAccountBtn").addEventListener("click", (e) => {
  e.preventDefault();
  confirmDeleteUser(auth.currentUser.email);
});

async function deleteUserByEmail2(email) {
  try {
    // Look up the user by email
    const userQuery = await firebase.auth().getUserByEmail(email);

    console.log("Made it here");
    if (!userQuery) {
      console.log("No matching user found.");
      return;
    }
    const userId = userQuery.uid;

    console.log("MAde it here");
    // Delete the user
    await auth().deleteUser(userId);

    // Delete the user document from Firestore
    await db.collection("users").doc(userId).delete();

    // Close the modal
    r_e("confirmDeleteUserModal").classList.remove("is-active");
    configure_message_bar("User deleted successfully.");
  } catch (error) {
    configure_message_bar("Error deleting user");
  }
}

// uploading images to gallery
// save new data into a collection
function save_data(coll, obj) {
  db.collection(coll)
    .add(obj)
    .then(() => {
      // show a success message to the user
      configure_message_bar(`${obj.title} has been uploaded!`);
      // reset the form
      // grab from tag and access the .value and reset it (make it empty string)

      r_e("newGalleryPic").value = "";

      load_data("gallery_images", "feed-page", "gallerypage");
    });
}

// admin uploading gallery images
r_e("upload_button").addEventListener("click", () => {
  // getting the image ready
  let file = document.querySelector("#newGalleryPic").files[0];
  let image = new Date() + "_" + file;

  const task = ref.child(image).put(file);

  task
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .then((url) => {
      // the url of the image is ready now!
      // 4. wrap those in an object
      let galleryImage = { url: url };
      // 5. send the object to firebase
      save_data("gallery_images", galleryImage);
    });
});

function load_data(coll, loc, loc2, field, val) {
  // check if we pass all 5 arguments
  let query = "";

  if (field && val) {
    query = db.collection(coll).where(field, "array-contains", val);
  } else {
    query = db.collection(coll);
  }
  query.get().then((res) => {
    let documents = res.docs;

    // html reference
    html = "";

    // loop through documents array
    documents.forEach((doc) => {
      // console.log(doc.data().title);
      html += `<div class="column is-one-third has-text-centered" style="display: flex; justify-content: center; align-items: center;">`;
      html += `<figure><img src="${doc.data().url}" /></figure>`;
      html += `</div>`;
    });

    // show on the div with id indicated location
    r_e(loc2).innerHTML = `<div class="columns is-multiline">${html}</div>`;
  });
}
