// Variables

// const { auth } = require("firebase-admin");

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
let availabilitybtn = r_e("availabilitybtn");
// let reportanissuebtn = r_e("reportanissuebtn");

let = allBtns = [
  homebtn,
  shopbtn,
  gallerybtn,
  dashboardbtn,
  aboutbtn,
  contactbtn,
  availabilitybtn,
  // reportanissuebtn,
];

let homepage = r_e("homepage");
let shoppage = r_e("shopPage");
let gallerypage = r_e("gallerypage");
let dashboardpage = r_e("dashboardpage");
let aboutpage = r_e("publicLandingPage");
let contactpage = r_e("conactpage");
let reportanissuepage = r_e("reportanissuepage");
let manageshoppage = r_e("manageshoppage");
let managecontactpage = r_e("managecontactpage");
let managegallerypage = r_e("managegallerypage");
let manageuserspage = r_e("manageuserspage");
let manageaboutuspage = r_e("manageaboutuspage");
let customerorderspage = r_e("customerOrdersPage");
let availabilitypage = r_e("availabilitypage");
let manageavailabilitypage = r_e("manageavailabilitypage");

let = allPages = [
  homepage,
  shoppage,
  gallerypage,
  dashboardpage,
  aboutpage,
  contactpage,
  reportanissuepage,
  manageshoppage,
  managecontactpage,
  managegallerypage,
  manageuserspage,
  manageaboutuspage,
  customerorderspage,
  availabilitypage,
  manageavailabilitypage,
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
  showHomePage();
  // Remove the is-active from the prior page
  allBtns.forEach((btn) => {
    btn.style.backgroundColor = "";
    if (btn.classList.contains("is-active")) {
      btn.classList.remove("is-active");
    }
  });
  // Update the Navbar
  homebtn.classList.add("is-active");

  homebtn.style.backgroundColor = "#f5f5f5";

  // Hide the menu when burger icon was clicked
  menu.classList.toggle("is-active");
});

function showHomePage() {
  let p1 = "";
  let p2 = "";
  let p3 = "";
  let img = "";
  let html = "";
  new Promise((res, rej) => {
    db.collection("site_static")
      .where("ref", "==", "home")
      .get()
      .then((data) => {
        let mydocs = data.docs;
        p1 = mydocs[0].data().paragraph1;
        p2 = mydocs[0].data().paragraph2;
        p3 = mydocs[0].data().paragraph3;
        img = mydocs[0].data().img_url;

        html += `<div class="column is-5 mr-2">
        <!-- Slideshow container -->
        <div class="slideshow-container">
        
          <!-- Full-width images with number and caption text -->
          <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img src="Untitled_design.png" style="width:100%">
          </div>
        
          <div class="mySlides fade" id="mySlides2">
            <div class="numbertext">2 / 3</div>
            <img src="Untitled_design2.png" style="width:100%">
          </div>
        
          <div class="mySlides fade" id="mySlides3">
            <div class="numbertext">3 / 3</div>
            <img src="Untitled_design3.png" style="width:100%">
          </div>
        
          <!-- Next and previous buttons -->
          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a id="special" class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <br>
        
        <!-- The dots/circles -->
        <div style="text-align:center">
          <span class="dot" onclick="currentSlide(1)"></span>
          <span class="dot" onclick="currentSlide(2)"></span>
          <span class="dot" onclick="currentSlide(3)"></span>
        </div>
      </div>
      <div class="column is-7 m-2">
        <div class="content">
          <h1 class="title is-2" style="font-family: Brush Script MT, Brush Script Std, cursive">Hello!</h1>
          <p class="subtitle is-4 my-1" style="font-family: Snell Roundhand, Cursive">${p1}</p>
          <br />
          <p class="subtitle is-4 my-0" style="font-family: Snell Roundhand, Cursive">${p2}</p>
          <br />
          <p class="subtitle is-4 mt-1 mb-0" style="font-family: Snell Roundhand, Cursive">${p3}</p>
          <br />
        </div>
      </div>`;
        r_e("homepagehtml").innerHTML = html;
      });
  });
}

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
    btn.style.backgroundColor = "";
    if (btn.classList.contains("is-active")) {
      btn.classList.remove("is-active");
    }
  });
  // Update the Navbar
  shopbtn.classList.add("is-active");
  shopbtn.style.backgroundColor = "#f5f5f5";
  // Hide the menu when burger icon was clicked
  menu.classList.toggle("is-active");

  let pos = 3; // reference number for correct column positioning
  let tileCols = document
    .querySelector("#productCardColumns")
    .querySelectorAll(".column");

  // funciton to generate a product card given card data
  let productCardGen = function (doc) {
    let product = doc.data();
    return `<div class="card productCard"">
    <header class="card-header">
    <p class="card-header-title">
      ${product.product_name}
    </p>
  </header>
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="${product.main_pic}" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content m-3">
      <!-- <div class="title is-5"><a href="#">Product 1</a></div> -->
      <!-- the id should be the product document id in firebase -->
      <div class="is-flex is-justify-content-center">
        <button class="button productDetailsBtn has-text-white has-text-weight-bold" style="background-color: #b493db" id="${doc.id}">Add to Cart</button>
      </div>

      <div class="content productCardContent mt-3">
      ${product.product_description}
        <br />
      </div>
    </div>
  </div>`;
  };

  let clearProductModal = function () {
    r_e("viewProductModal").classList.remove("is-active");
    r_e("viewProductQuantityView").classList.remove(
      "has-text-danger",
      "has-text-black"
    );
    r_e("viewProductQuantityView").innerHTML = "enter quantity";
    r_e("viewProductQuantity").value = "";

    r_e("viewProductModalName").innerHTML = "";
    r_e("viewProductModalDescription").innerHTML = "";
    r_e("viewProductModalInventory").innerHTML = "";
    r_e("viewProductModalPrice").innerHTML = "";

    r_e("viewProductAddCartBtn").setAttribute("disabled", true);
    r_e("viewProductAddCartBtn").classList.remove("is-loading");
  };

  editCart = function (doc, qty, orderPrice) {
    let product = doc.data();
    // create or edit a users cart
    let email = firebase.auth().currentUser.email;

    db.collection("orders")
      .where("user_email", "==", email)
      .where("order_status", "==", "CART")
      .get()
      .then((data) => {
        if (data.docs.length == 1) {
          // if the user already has a CART order then update it
          let order = data.docs[0].data();
          if (order.product_ids.includes(doc.id.toString())) {
            let productIndex = order.product_ids.indexOf(doc.id);
            order.product_quantities[productIndex] += qty;
            db.collection("orders")
              .doc(data.docs[0].id)
              .update({
                product_quantities: order.product_quantities,
              })
              .then();
          } else {
            // update arrays
            order.product_prices.push(orderPrice);
            order.product_quantities.push(qty);
            order.product_ids.push(doc.id);

            db.collection("orders").doc(data.docs[0].id).update({
              product_prices: order.product_prices,
              product_quantities: order.product_quantities,
              product_ids: order.product_ids,
            });
          }
        } else {
          // if the user does not have a CART order then create one
          db.collection("orders").add({
            user_email: email,
            product_prices: [product.price],
            product_quantities: [qty],
            product_ids: [doc.id],
            order_status: "CART",
          });
        }

        // adding to cart completed
      })
      .then(() => {
        clearProductModal();
        configure_message_bar(`Product added to cart`);
      });
  };

  let productModalGen = function (doc) {
    product = doc.data();
    quantity = null;
    currentDoc = doc;
    price = product.price;
    let sale = product.on_sale;

    if (sale) {
      price = product.sale_price;
      r_e("viewProductModalPrice").classList.add("has-text-primary");
    } else {
      r_e("viewProductModalPrice").classList.remove("has-text-primary");
    }

    // fill in the modal with the correct information
    r_e("viewProductModalName").innerHTML = product.product_name;
    r_e("viewProductModalDescription").innerHTML = product.product_description;
    r_e("viewProductModalInventory").innerHTML = product.current_inventory;
    r_e("viewProductModalPrice").innerHTML = `$${price}`;

    // inner modal functionality

    r_e("viewProductModalBg").addEventListener("click", () => {
      clearProductModal();
    });
    r_e("viewProductQtyBtn").addEventListener("click", () => {
      requestedQty = r_e("viewProductQuantity").value;

      // check if requestedQty is not blank, an integer, and less than products.current_inventory
      if (firebase.auth().currentUser) {
        if (
          requestedQty !== "" &&
          Number.isInteger(Number(requestedQty)) &&
          Number(requestedQty) < product.current_inventory
        ) {
          r_e("viewProductQuantityView").classList.remove(
            "has-text-grey",
            "has-text-danger"
          );
          r_e("viewProductQuantityView").classList.add("has-text-black");
          r_e(
            "viewProductQuantityView"
          ).innerHTML = `<span class="has-text-weight-medium has-text-info">${requestedQty}</span> dozen(s) totaling <span class="has-text-weight-medium has-text-info">$${(
            requestedQty * price
          ).toFixed(2)}</span>`;
          r_e("viewProductAddCartBtn").removeAttribute("disabled");
          quantity = parseInt(requestedQty);
        } else {
          r_e("viewProductQuantityView").classList.remove("has-text-grey");
          r_e("viewProductQuantityView").classList.add("has-text-danger");
          r_e("viewProductQuantityView").innerHTML = "Invalid Quantity";
          r_e("viewProductAddCartBtn").setAttribute("disabled", true);
          quantity = null;
        }
      } else {
        r_e("viewProductQuantityView").classList.remove("has-text-grey");
        r_e("viewProductQuantityView").classList.add("has-text-danger");
        r_e("viewProductQuantityView").innerHTML = "Sign in to order";
      }
    });

    // display the modal
    r_e("viewProductModal").classList.add("is-active");
  };

  // clear all card columns
  r_e("productCardColumns")
    .querySelectorAll(".column")
    .forEach((col) => {
      col.innerHTML = "";
    });

  // display all products from the db, generate a modal with additional information
  db.collection("products")
    .get()
    .then((data) => {
      let docs = data.docs;
      docs.forEach((doc) => {
        let col = tileCols[pos % 3];
        col.innerHTML += productCardGen(doc);
        pos++;
      });

      let productBtns = document.querySelectorAll(".productDetailsBtn");
      productBtns.forEach((prod) => {
        prod.addEventListener("click", () => {
          db.collection("products")
            .doc(prod.id)
            .get()
            .then((doc) => {
              productModalGen(doc);
            });
        });
      });
    });
});

r_e("viewProductAddCartBtn").addEventListener("click", () => {
  editCart(currentDoc, quantity, price);
  r_e("viewProductAddCartBtn").setAttribute("disabled", true);
  r_e("viewProductAddCartBtn").classList.add("is-loading");
});

// Add products to cart
function addToCart(id) {
  // Alex work here
  allPages.forEach((page) => {
    if (page.classList.contains("is-active")) {
      hidemodal(page);
    }
  });
}

// Shopping cart

let sum = function (numbers) {
  return numbers.reduce((accumulator, currentValue) => {
    return parseInt(accumulator) + parseInt(currentValue);
  }, 0);
};

r_e("shoppingCartBtn").addEventListener("click", () => {
  r_e("cartTable").innerHTML = "";
  let currentUser = firebase.auth().currentUser;
  if (currentUser) {
    r_e("shoppingCartModal").classList.add("is-active");
    db.collection("orders")
      .where("user_email", "==", currentUser.email)
      .where("order_status", "==", "CART")
      .get()
      .then((data) => {
        // console.log(data.docs);
        if (data.docs.length == 1) {
          let cart = data.docs[0].data();
          let products = cart.product_ids;
          let prices = cart.product_prices;
          let quantities = cart.product_quantities;
          let totalCost = 0;
          for (let i = 0; i < products.length; i++) {
            get_firebase_data("products", products[i], "product_name").then(
              (productName) => {
                r_e("cartTable").innerHTML += `<tr>
                <td>${productName}</td>
                <td>${prices[i]}</td>
                <td>${quantities[i]}</td>
                <td><button class="button is-small is-danger cartDeleteBtn" id="${i}">Remove</button></td>
              </tr>`;
                totalCost = totalCost + prices[i] * quantities[i];
                r_e("cartTotalCost").innerHTML = `$${totalCost}`;
              }
            );
          }

          r_e("cartTotalQuantity").innerHTML = sum(quantities);

          r_e("cartTable").addEventListener("click", (event) => {
            let lessCost = parseInt(prices[i]) * parseInt(quantities[i]);

            prices.splice(event.target.id, 1);
            products.splice(event.target.id, 1);
            quantities.splice(event.target.id, 1);
            if (event.target.classList.contains("cartDeleteBtn")) {
              db.collection("orders")
                .doc(data.docs[0].id)
                .update({
                  product_prices: prices,
                  product_quantities: quantities,
                  product_ids: products,
                })
                .then(() => {
                  event.target.closest("tr").remove();
                  totalCost = totalCost - lessCost;
                  if (isNaN(totalCost) || totalCost < 0) {
                    totalCost = 0;
                  }
                  r_e("cartTotalCost").innerHTML = `$${totalCost}`;
                  r_e("cartTotalQuantity").innerHTML = sum(quantities);
                });
            }
          });
        } else {
        }
      });
  } else {
    configure_message_bar("You must be signed in to access the cart");
  }
});

// Checkout
r_e("checkoutBtn").addEventListener("click", () => {
  r_e("checkoutTable").innerHTML = "";
  r_e("shoppingCartModal").classList.remove("is-active");
  r_e("checkoutModal").classList.add("is-active");
  db.collection("orders")
    .where("user_email", "==", firebase.auth().currentUser.email)
    .where("order_status", "==", "CART")
    .get()
    .then((data) => {
      if (data.docs.length == 1) {
        get_user_info(firebase.auth().currentUser.email, "full_name").then(
          (name) => {
            r_e("name_checkout").value = name;
            let cart = data.docs[0].data();
            let products = cart.product_ids;
            let prices = cart.product_prices;
            let quantities = cart.product_quantities;
            let totalCost = 0;
            for (let i = 0; i < products.length; i++) {
              get_firebase_data("products", products[i], "product_name").then(
                (productName) => {
                  r_e("checkoutTable").innerHTML += `<tr>
              <td>${productName}</td>
              <td>${prices[i]}</td>
              <td>${quantities[i]}</td>
            </tr>`;
                  totalCost = totalCost + prices[i] * quantities[i];
                  r_e("checkoutTotalCost").innerHTML = `$${totalCost}`;
                }
              );
            }
            r_e("checkoutTotalQuantity").innerHTML = sum(quantities);
          }
        );
      } else {
        // nothing in the cart
      }
    });
});

// when the user clicks on the backgorund, hide the modal
r_e("checkoutModalBg").addEventListener("click", () => {
  r_e("checkoutModal").classList.remove("is-active");
});

// when the user clicks on the backgorund, hide the modal
r_e("shoppingCartModalBg").addEventListener("click", () => {
  r_e("shoppingCartModal").classList.remove("is-active");
  r_e("cartTotalCost").innerHTML = "$0";
  r_e("cartTotalQuantity").innerHTML = "0";
  r_e("cartTable").innerHTML = "";
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
    btn.style.backgroundColor = "";
    if (btn.classList.contains("is-active")) {
      btn.classList.remove("is-active");
    }
  });
  // Update the Navbar
  gallerybtn.classList.add("is-active");
  gallerybtn.style.backgroundColor = "#f5f5f5";
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
    btn.style.backgroundColor = "";
    if (btn.classList.contains("is-active")) {
      btn.classList.remove("is-active");
    }
  });
  // Update the Navbar
  dashboardbtn.classList.add("is-active");
  dashboardbtn.style.backgroundColor = "#f5f5f5";
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
  showAboutUs();
  hidemodal(homepage);
  // Remove the is-active from the prior page
  allBtns.forEach((btn) => {
    btn.style.backgroundColor = "";
    if (btn.classList.contains("is-active")) {
      btn.classList.remove("is-active");
    }
  });
  // Update the Navbar
  aboutbtn.classList.add("is-active");
  aboutbtn.style.backgroundColor = "#f5f5f5";
  // Hide the menu when burger icon was clicked
  menu.classList.toggle("is-active");
});

// Public Availability Page
document.querySelector("#availabilitybtn").addEventListener("click", () => {
  // Hide all other pages
  allPages.forEach((page) => {
    if (page.classList.contains("is-active")) {
      hidemodal(page);
    }
  });
  showmodal(availabilitypage);
  // Remove the is-active from the prior page
  allBtns.forEach((btn) => {
    btn.style.backgroundColor = "";
    if (btn.classList.contains("is-active")) {
      btn.classList.remove("is-active");
    }
  });
  // Update the Navbar
  availabilitybtn.classList.add("is-active");

  availabilitybtn.style.backgroundColor = "#f5f5f5";

  // Hide the menu when burger icon was clicked
  menu.classList.toggle("is-active");
  // this is a test
  load_data2("janavail", "feed-page", "janavail", "users");
});

//Pulling about us page data from firebase
function showAboutUs() {
  let p1 = "";
  let p2 = "";
  let img = "";
  let html = "";
  new Promise((res, rej) => {
    db.collection("site_static")
      .where("ref", "==", "abt_us")
      .get()
      .then((data) => {
        let mydocs = data.docs;
        p1 = mydocs[0].data().paragraph1;
        p2 = mydocs[0].data().paragraph2;
        img = mydocs[0].data().img_url;

        html += `<div class="columns is-flex-direction-row my-2">
            <div class="column is-5">
              <figure class="image is-4by5">
                <img src=${img}/>
              </figure>
            </div>
            <div class="column is-7 m-3">
              <div class="content p-5">
                <h1 class="m-2" style="font-family: Brush Script MT, Brush Script Std, cursive">Meet the Owner!</h1>
                <p class="subtitle is-4 my-1 p-4" style="font-family: Snell Roundhand, Cursive">${p1}</p>
                <br />
                <p class="subtitle is-4 my-1 p-4" style="font-family: Snell Roundhand, Cursive">${p2}</p>
                <br />
              </div>
            </div>
          </div>`;
        r_e("aboutushtml").innerHTML = html;
      });
  });
}

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
    btn.style.backgroundColor = "";
    if (btn.classList.contains("is-active")) {
      btn.classList.remove("is-active");
    }
  });
  // Update the Navbar
  contactbtn.classList.add("is-active");
  contactbtn.style.backgroundColor = "#f5f5f5";
  // Hide the menu when burger icon was clicked
  menu.classList.toggle("is-active");
});

// // Public report an issue Page
// document.querySelector("#reportanissuebtn").addEventListener("click", () => {
//   // Hide all other pages
//   allPages.forEach((page) => {
//     if (page.classList.contains("is-active")) {
//       hidemodal(page);
//     }
//   });
//   showmodal(reportanissuepage);
//   hidemodal(homepage);
//   // Remove the is-active from the prior page
//   allBtns.forEach((btn) => {
//     if (btn.classList.contains("is-active")) {
//       btn.classList.remove("is-active");
//     }
//   });
//   // Update the Navbar
//   reportanissuebtn.classList.add("is-active");
//   // Hide the menu when burger icon was clicked
//   menu.classList.toggle("is-active");
// });

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
  }, 3000);
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
  // Update Title text
  r_e("manageShopTableTitle").innerHTML = "";
  // Hide the product table if it was showing
  if (!r_e("productTable").classList.contains("is-hidden")) {
    r_e("productTable").classList.add("is-hidden");
    r_e("manageProductsPageLinks").classList.add("is-hidden");
  }
  // Hide the orders table if it was showing
  if (!r_e("ordersTable").classList.contains("is-hidden")) {
    r_e("ordersTable").classList.add("is-hidden");
    r_e("manageOrdersPageLinks").classList.add("is-hidden");
  }
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

function mngContactBtn() {
  allPages.forEach((page) => {
    if (page.classList.contains("is-active")) {
      hidemodal(page);
    }
  });
  showmodal(managecontactpage);
  // Show responses
  show_contact_responses();
  hidemodal(dashboardpage);
  // Remove the is-active from the prior page
  allBtns.forEach((btn) => {
    if (btn.classList.contains("is-active")) {
      btn.classList.remove("is-active");
    }
  });
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

function mngAvailabilityBtn() {
  allPages.forEach((page) => {
    if (page.classList.contains("is-active")) {
      hidemodal(page);
    }
  });
  showmodal(manageavailabilitypage);
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
  showMngAboutUs();
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

function showMngAboutUs() {
  let hp1 = "";
  let hp2 = "";
  let hp3 = "";
  let ap1 = "";
  let ap2 = "";
  let html = "";
  new Promise((res, rej) => {
    db.collection("site_static")
      .where("ref", "==", "home")
      .get()
      .then((data) => {
        let mydocs = data.docs;
        hp1 = mydocs[0].data().paragraph1;
        hp2 = mydocs[0].data().paragraph2;
        hp3 = mydocs[0].data().paragraph3;
        html += `<div class="section has-text-centered mt-2 pt-0">
        <div class="subtitle is-3">Manage Home Page First Paragraph</div>
        <div class="field">
          <textarea class="textarea" placeholder="Input new text for the first paragraph of the home page!" rows = "10" id="hometextbox">${hp1}</textarea>
          <br>
          <button class="button has-text-white" style="background-color: #b493db" onclick="updateHomep1Button()"><strong>Update Home Page</strong></button>
        </div>
      </div>
      <div class="section has-text-centered mt-2 pt-0">
        <div class="subtitle is-3">Manage Home Page Second Paragraph</div>
        <div class="field">
          <textarea class="textarea" placeholder="Input new text for the second paragraph of the home page!" rows = "10" id="hometextbox2">${hp2}</textarea>
          <br>
          <button class="button has-text-white" style="background-color: #b493db" onclick="updateHomep2Button()"><strong>Update Home Page</strong></button>
        </div>
      </div>
      <div class="section has-text-centered mt-2 pt-0">
        <div class="subtitle is-3">Manage Home Page Third Paragraph</div>
        <div class="field">
          <textarea class="textarea" placeholder="Input new text for the third paragraph of the home page!" rows = "10" id="hometextbox3">${hp3}</textarea>
          <br>
          <button class="button has-text-white" style="background-color: #b493db" onclick="updateHomep3Button()"><strong>Update Home Page</strong></button>
        </div>
      </div>`;
      });
  });
  new Promise((res, rej) => {
    db.collection("site_static")
      .where("ref", "==", "abt_us")
      .get()
      .then((data) => {
        let mydocs = data.docs;
        ap1 = mydocs[0].data().paragraph1;
        ap2 = mydocs[0].data().paragraph2;
        html += `<div class="section has-text-centered mt-2 pt-0">
        <div class="subtitle is-3">Manage About Us First Paragraph</div>
        <div class="field">
          <textarea class="textarea" placeholder="Input new text for the first paragraph of the about us page!" rows = "10" id="aboutustextbox">${ap1}</textarea>
          <br>
          <button class="button has-text-white" style="background-color: #b493db" onclick="updateAboutUsp1Button()"><strong>Update About Us Page</strong></button>
        </div>
      </div>
      <div class="section has-text-centered mt-2 pt-0">
        <div class="subtitle is-3">Manage About Us Second Paragraph</div>
        <div class="field">
          <textarea class="textarea" placeholder="Input new text for the second paragraph of the about us page!" rows = "10" id="aboutustextbox2">${ap2}</textarea>
          <br>
          <button class="button has-text-white" style="background-color: #b493db" onclick="updateAboutUsp2Button()"><strong>Update About Us Page</strong></button>
        </div>
      </div>`;

        r_e("mngabtpagewrp").innerHTML = html;
      });
  });
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

function updateHomep1Button() {
  let newtext = r_e("hometextbox").value;
  update_firebase("site_static", "home", "paragraph1", newtext);
}

function updateHomep2Button() {
  let newtext = r_e("hometextbox2").value;
  update_firebase("site_static", "home", "paragraph2", newtext);
}

function updateHomep3Button() {
  let newtext = r_e("hometextbox3").value;
  update_firebase("site_static", "home", "paragraph3", newtext);
}

function updateAboutUsp1Button() {
  let newtext = r_e("aboutustextbox").value;
  update_firebase("site_static", "about_us", "paragraph1", newtext);
}

function updateAboutUsp2Button() {
  let newtext = r_e("aboutustextbox2").value;
  update_firebase("site_static", "about_us", "paragraph2", newtext);
}

// Example of how to use function for reference when working
// get_user_info(firebase.auth().currentUser.email, "full_name").then(
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
  // Show loading button
  r_e("submitSignUP").classList.add("is-loading");
  // Get the profile pic
  let profilePic = r_e("profilePic_su").files[0];
  let profileImage = new Date() + "_";
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
        a_type: "Customer",
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
        configure_message_bar(`Welcome ${firebase.auth().currentUser.email}`);
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
            //   <div class="button mt-1">${firebase.auth().currentUser.email}</div>
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
            // Stop loading button
            r_e("submitSignUP").classList.remove("is-loading");
            showmodal(homepage);
          })
          .catch((error) => {
            configure_message_bar("Error adding user: ", error);
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
  allBtns.forEach((btn) => {
    btn.style.backgroundColor = "";
  });
  homebtn.style.backgroundColor = "#f5f5f5";
  if (user) {
    r_e("homepage").classList.add("is-active");
    // Show profile info
    if (r_e("profileInfo").classList.contains("is-hidden")) {
      r_e("profileInfo").classList.remove("is-hidden");
    }
    configure_message_bar(`${user.email} has successfully signed in.`);
    // Show orders button if hidden
    if (r_e("showCustomerOrders").classList.contains("is-hidden")) {
      r_e("showCustomerOrders").classList.remove("is-hidden");
    }
    // Show shopping cart if hidden
    if (r_e("shoppingCartBtn").classList.contains("is-hidden")) {
      r_e("shoppingCartBtn").classList.remove("is-hidden");
    }
    // Hiding Dashboard Tab From Non-Admin Accounts
    get_user_info(firebase.auth().currentUser.email, "a_type").then((type) => {
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
        .where("email", "==", firebase.auth().currentUser.email)
        .get()
        .then((currentuser) => {
          let dateTime = get_current_timestamp();
          // update the database
          update_firebase("users", currentuser.id, "last_login", dateTime);
          // Show name and pic in upper corner
          get_user_info(firebase.auth().currentUser.email, "f_name").then(
            (name) => {
              get_user_info(
                firebase.auth().currentUser.email,
                "profile_pic"
              ).then((pic) => {
                document.getElementById("profilePicture").innerHTML = `
                  <figure class="image is-64x128 m-auto" >
                      <img class="is-rounded is-clickable my-1 mr-2" id="profileinfoicon" src="${pic}">
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
              });
            }
          );
        });
    });
    showHomePage();
  } else {
    // User is signed out
    // Hide the dashboard tab
    r_e("dashboardbtn").classList.add("is-hidden");
    // hide profile info
    if (!r_e("profileInfo").classList.contains("is-hidden")) {
      r_e("profileInfo").classList.add("is-hidden");
    }
    // Hide shopping cart if visible
    if (!r_e("shoppingCartBtn").classList.contains("is-hidden")) {
      r_e("shoppingCartBtn").classList.add("is-hidden");
    }
    showmodal(homepage);
    // Hide the view orders button
    r_e("showCustomerOrders").classList.add("is-hidden");
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
    showHomePage();
  }
});

// show the profile information modal when the user icon is clicked (with info loaded in)
r_e("profileInfo").addEventListener("click", () => {
  // Get the details and display them
  get_user_info(firebase.auth().currentUser.email, "f_name").then((first) => {
    get_user_info(firebase.auth().currentUser.email, "l_name").then((last) => {
      get_user_info(firebase.auth().currentUser.email, "username").then(
        (username) => {
          get_user_info(firebase.auth().currentUser.email, "a_type").then(
            (account) => {
              get_user_info(
                firebase.auth().currentUser.email,
                "profile_pic"
              ).then((pic) => {
                r_e("f_name_pi").value = first;
                r_e("l_name_pi").value = last;
                r_e("username_pi").value = username;
                r_e("email_pi").value = firebase.auth().currentUser.email;
                r_e("a_type_pi").value = account;
                document.getElementById("profileInfoProfilePic").src = pic;
                r_e("profileinformationmodal").classList.add("is-active");
              });
            }
          );
        }
      );
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
  let email = firebase.auth().currentUser.email;

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
            email: firebase.auth().currentUser.email,
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
  // Update Title text
  r_e("manageShopTableTitle").innerHTML = "";
  // Hide the orders table if it was showing
  if (!r_e("ordersTable").classList.contains("is-hidden")) {
    r_e("ordersTable").classList.add("is-hidden");
    r_e("manageOrdersPageLinks").classList.add("is-hidden");
  }
  // Hide the product table if it was showing
  if (!r_e("productTable").classList.contains("is-hidden")) {
    r_e("productTable").classList.add("is-hidden");
    r_e("manageProductsPageLinks").classList.add("is-hidden");
  }
  r_e("addShopItemModal").classList.add("is-active");
});

r_e("addShopItemModalBg").addEventListener("click", () => {
  r_e("addShopItemModal").classList.remove("is-active");
});

// Add the shop item to the database
r_e("addShopItemForm").addEventListener("submit", (e) => {
  // Show Loading button
  r_e("submitAddProduct").classList.add("is-loading");
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
        added_by: firebase.auth().currentUser.email,
      };

      // Store the object in the database
      db.collection("products")
        .add(item)
        .then(() => {
          // Hide the form
          r_e("addShopItemModal").classList.remove("is-active");
          // Remove Loading button
          r_e("submitAddProduct").classList.remove("is-loading");
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
        <a class="pagination-link has-text-white" data-page="${i}">${i + 1}</a>
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
    let prevBtn = document.getElementById("manageUsersPrevPage");
    let nextBtn = document.getElementById("manageUsersNextPage");

    if (prevBtn) {
      prevBtn.disabled = currentPage === 0;
    }

    if (nextBtn) {
      nextBtn.disabled = currentPage === numPages - 1;
    }

    let pageLinks = document.querySelectorAll("#manageUsersPageLinks a");
    pageLinks.forEach((link) => {
      if (parseInt(link.dataset.page) === currentPage) {
        link.classList.add("is-active");
        link.style.backgroundColor = "#b493db";
      } else {
        link.classList.remove("is-active");
        link.style.backgroundColor = "";
      }
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
    if (event.target.id === "manageUsersPrevPage") {
      showPage(currentPage - 1);
    } else if (event.target.id === "manageUsersNextPage") {
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
  // console.log("hello");
  r_e("confirmDeleteUserModal").classList.add("is-active");
  // console.log(r_e("confirmDeleteUserModal").classList);
  r_e(
    "confirmDeleteMessage"
  ).innerHTML = `Are you sure you want to delete ${email}? WARNING this cannot be undone.`;

  r_e("confirmDeleteUser").addEventListener("click", () => {
    // Delete the user
    // Get the currently logged in user
    var user = firebase.auth().currentUser;
    // console.log(user);
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
  confirmDeleteUser(firebase.auth().currentUser.email);
});

async function deleteUserByEmail2(email) {
  try {
    // Look up the user by email
    const userQuery = await firebase.auth().getUserByEmail(email);

    // console.log("Made it here");
    if (!userQuery) {
      configure_message_bar("No matching user found.");
      return;
    }
    const userId = userQuery.uid;

    // console.log("MAde it here");
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
      configure_message_bar(`image has been uploaded!`);
      // reset the form
      // grab from tag and access the .value and reset it (make it empty string)

      r_e("newGalleryPic").value = "";

      load_data("gallery_images", "feed-page", "gallerypage", "users");
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
      let galleryImage = {
        url: url,
      };
      // 5. send the object to firebase
      save_data("gallery_images", galleryImage);
    });
});

function load_data(coll, loc, loc2, field, val) {
  let query = "";
  if (field && val) {
    query = db.collection(coll).where(field, "array-contains", val);
  } else {
    query = db.collection(coll);
  }
  query.get().then((res) => {
    let documents = res.docs;
    let user = firebase.auth().currentUser;
    let type = null;
    // html reference
    html = "";

    if (user) {
      get_user_info(firebase.auth().currentUser.email, "a_type").then(
        (type) => {
          // if a user exists then get the user type

          // loop through documents array
          let count = 0;
          html += `<div class="columns is-multiline">`;
          documents.forEach((doc) => {
            // console.log(doc.data().title);
            html += `<div class="column is-one-third">`;
            html += `<figure style="position:relative;">`;
            html += `<img src="${doc.data().url}" />`;
            // Check if the user is an admin
            if (type == "Admin") {
              html += `<button class="button is-pulled-right is-danger" style="position:absolute;top:0;right:0;" onclick="del_doc('gallery_images', '${doc.id}')">X</button>`;
            }
            html += `</figure>`;
            html += `</div>`;
            // Create a new row after every 3 images
            count++;
            if (count % 3 == 0) {
              html += `</div><div class="columns is-multiline">`;
            }
          });
          html += `</div>`;

          // show on the div with id indicated location
          r_e(loc2).innerHTML = html;
        }
      );
    } else {
      // User is logged out, show general layout
      let count = 0;
      html += `<div class="columns is-multiline">`;
      documents.forEach((doc) => {
        // console.log(doc.data().title);
        html += `<div class="column is-one-third">`;
        html += `<figure style="position:relative;">`;
        html += `<img src="${doc.data().url}" />`;
        html += `</figure>`;
        html += `</div>`;
        // Create a new row after every 3 images
        count++;
        if (count % 3 == 0) {
          html += `</div><div class="columns is-multiline">`;
        }
      });
      html += `</div>`;

      // show on the div with id indicated location
      r_e(loc2).innerHTML = html;
    }
  });
}

function load_data2(coll, loc, loc2, field, val) {
  let query = "";
  if (field && val) {
    query = db.collection(coll).where(field, "array-contains", val);
  } else {
    query = db.collection(coll);
  }
  query.get().then((res) => {
    let documents = res.docs;
    let user = firebase.auth().currentUser;
    let type = null;
    // html reference
    html = "";

    if (user) {
      get_user_info(firebase.auth().currentUser.email, "a_type").then(
        (type) => {
          // if a user exists then get the user type

          // loop through documents array
          let count = 0;
          documents.forEach((doc) => {
            html += `<figure style="position:relative;">`;
            html += `<img src="${doc.data().img_url}" />`;
            // Check if the user is an admin
            if (type == "Admin") {
              html += `<button class="button is-pulled-right is-danger" style="position:absolute;top:0;right:0;" onclick="del_doc2('${coll}', '${doc.id}')">X</button>`;
            }
            html += `</figure>`;
          });

          // show on the div with id indicated location
          r_e(loc2).innerHTML = html;
        }
      );
    } else {
      // User is logged out, show general layout
      documents.forEach((doc) => {
        // console.log(doc.data().title);
        html += `<img src="${doc.data().img_url}" />`;
      });

      // show on the div with id indicated location
      r_e(loc2).innerHTML = html;
    }
  });
}

// delete gallery images for admin only
function del_doc(coll, id) {
  db.collection(coll)
    .doc(id)
    .delete()
    .then(() => {
      // show a message on the message bar
      configure_message_bar("An image has been deleted!");

      // reload all images
      load_data("gallery_images", "feed-page", "gallerypage", "users");
    });
}

// delete gallery images for admin only
function del_doc2(coll, id) {
  db.collection(coll)
    .doc(id)
    .delete()
    .then(() => {
      // show a message on the message bar
      configure_message_bar("An image has been deleted!");

      // reload all images
      load_data2("janavail", "feed-page", "janavail", "users");
    });
}

// Message box on Contact Us Page
r_e("hideMessageBtn").addEventListener("click", () => {
  r_e("bugReportMessage").classList.add("is-hidden");
});

// Contact Us Page
r_e("contact_us_form").addEventListener("submit", (e) => {
  e.preventDefault();
  let name = r_e("contactName").value;
  let email = r_e("contactEmail").value;
  let subject = r_e("contactSubject").value;
  let order_no = r_e("contactOrderNo").value;
  let message = r_e("contactMsg").value;
  let phone_no = r_e("contactPhoneNo").value;

  let response = {
    name: name,
    email: email,
    subject: subject,
    message: message,
    order_no: order_no,
    phone_no: phone_no,
    time_submitted: get_current_timestamp(),
    last_updated: "---",
    status: "NEW",
  };

  db.collection("contact_form_responses")
    .add(response)
    .then(() => {
      // show an info message to the user
      configure_message_bar("A new submission was added!");
      // Clear the form
      r_e("contactName").value = "";
      r_e("contactEmail").value = "";
      r_e("contactSubject").value = "";
      r_e("contactOrderNo").value = "";
      r_e("contactPhoneNo").value = "";
      r_e("contactMsg").value = "";
    });
});
// Clear the Form
r_e("clearContact").addEventListener("click", (e) => {
  e.preventDefault();
  r_e("contactName").value = "";
  r_e("contactEmail").value = "";
  r_e("contactSubject").value = "";
  r_e("contactOrderNo").value = "";
  r_e("contactPhoneNo").value = "";
  r_e("contactMsg").value = "";
});

// Display Contact Form Responses
function show_contact_responses() {
  const PAGE_SIZE = 10;
  let currentPage = 0;
  let numPages = 0;

  function renderTable(startIndex, numToShow) {
    db.collection("contact_form_responses")
      .get()
      .then((data) => {
        let mydocs = data.docs;
        let html = "";

        let endIndex =
          numToShow > 0
            ? Math.min(startIndex + numToShow, mydocs.length)
            : mydocs.length;

        mydocs.slice(startIndex, endIndex).forEach((response, index) => {
          html += `
            <tr class="is-clickable is-hoverable" onclick="changeContactStatus('${
              response.id
            }')">
            
              <td class="has-text-left">${response.data().name}</td>
  
              <td class="has-text-left">${response.data().email}</td>
              <td class="has-text-left">${response.data().subject}</td>
              <td class="has-text-left">${response.data().time_submitted}</td>
              <td class="has-text-left">${response.data().order_no}</td>
              <td class="has-text-left">${response.data().status}</td>
              <td class="has-text-left">${response.data().message}</td>
              <td>
                <div class="buttons has-addons is-centered">
                  <button class="button is-small" onclick="editContact('${
                    response.id
                  }')"><i class="fas fa-edit"></i></button>
                  <button class="button is-danger is-small" onclick="deleteContact('${
                    response.id
                  }')">X</button>
                 
                </div> 
              </td>
            </tr>
          `;
        });

        document.getElementById("contact_table").innerHTML = html;
      });
  }

  function renderPageLinks() {
    let html = "";
    for (let i = 0; i < numPages; i++) {
      html += `
        <a class="pagination-link has-text-white" data-page="${i}">${i + 1}</a>
      `;
    }

    document.getElementById("manageContactPageLinks").innerHTML = html;
  }

  function showPage(pageNum) {
    let startIndex = pageNum * PAGE_SIZE;
    renderTable(startIndex, PAGE_SIZE);
    currentPage = pageNum;
    updateNavigation();
  }

  function updateNavigation() {
    let prevBtn = document.getElementById("manageContactPrevPage");
    let nextBtn = document.getElementById("manageContactNextPage");

    if (prevBtn) {
      prevBtn.disabled = currentPage === 0;
    }

    if (nextBtn) {
      nextBtn.disabled = currentPage === numPages - 1;
    }

    let pageLinks = document.querySelectorAll("#manageContactPageLinks a");
    pageLinks.forEach((link) => {
      if (parseInt(link.dataset.page) === currentPage) {
        link.classList.add("is-active");
        link.style.backgroundColor = "#b493db";
      } else {
        link.classList.remove("is-active");
        link.style.backgroundColor = "";
      }
    });
  }

  db.collection("contact_form_responses")
    .get()
    .then((data) => {
      numPages = Math.ceil(data.docs.length / PAGE_SIZE);
      renderPageLinks();
      showPage(0);
    });

  document.addEventListener("click", (event) => {
    if (event.target.id === "manageContactPrevPage") {
      showPage(currentPage - 1);
    } else if (event.target.id === "manageContactNextPage") {
      showPage(currentPage + 1);
    } else if (event.target.classList.contains("pagination-link")) {
      showPage(parseInt(event.target.dataset.page));
    }
  });
}

// Change the status of contact us form when row is clicked to 'Read'
function changeContactStatus(id) {
  update_firebase("contact_form_responses", id, "status", "Read");
  show_contact_responses();
}

// Delete a contact us form response
function deleteContact(id) {
  if (r_e("confirmDeleteContactModal").classList.contains("is-hidden")) {
  }
  r_e("confirmDeleteContactModal").classList.add("is-active");
  r_e(
    "confirmDeleteContactMessage"
  ).innerHTML = `Are you sure you want to delete this response?`;
  // User selects confirm
  r_e("confirmDeleteContact").addEventListener("click", () => {
    // Get a reference to the document
    var docRef = db.collection("contact_form_responses").doc(id);

    // Delete the document
    docRef
      .delete()
      .then(() => {
        r_e("confirmDeleteContactModal").classList.remove("is-active");
        configure_message_bar("Document successfully deleted!");
        show_contact_responses();
      })
      .catch((error) => {
        configure_message_bar("Error removing document");
      });
  });
}

// Hide the modal when needed
r_e("confirmDeleteContactModalBg").addEventListener("click", () => {
  r_e("confirmDeleteContactModal").classList.remove("is-active");
});

r_e("cancelDeleteContact").addEventListener("click", () => {
  r_e("confirmDeleteContactModal").classList.remove("is-active");
});

// Show contact us response in modal
function editContact(response_id) {
  r_e("contactFormResponseModal").classList.add("is-active");

  // Get a reference to the document
  var docRef = db.collection("contact_form_responses").doc(response_id);

  // Retrieve the document
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        // Pre-fill the form with the data
        r_e("contact_us_name").value = doc.data().name;
        r_e("contact_us_email").value = doc.data().email;
        r_e("contact_us_subject").value = doc.data().subject;
        r_e("contact_us_phone_no").value = doc.data().phone_no;
        r_e("contact_us_order_no").value = doc.data().order_no;
        r_e("contact_us_message").value = doc.data().message;
        r_e("contact_us_status").value = doc.data().status;
        r_e("contact_us_date_submitted").value = doc.data().time_submitted;
      } else {
        // Error Loading the data
        configure_message_bar("No such document!");
      }
    })
    .catch((error) => {
      configure_message_bar("Error getting document:", error);
    });

  // Update the response when submitted

  // Submit the updated contact us information
  r_e("contactFormResponseForm").addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("contact_form_responses")
      .get()
      .then((data) => {
        let mydocs = data.docs;
        mydocs.forEach((doc) => {
          if (doc.id == response_id) {
            // found the right user
            // get the new info
            let newInfo = {
              name: r_e("contact_us_name").value,
              email: r_e("contact_us_email").value,
              subject: r_e("contact_us_subject").value,
              phone_no: r_e("contact_us_phone_no").value,
              status: r_e("contact_us_status").value,
              username: r_e("username_pi").value,
              order_no: r_e("contact_us_order_no").value,
              message: r_e("contact_us_message").value,
              time_submitted: r_e("contact_us_date_submitted").value,
              last_updated: get_current_timestamp(),
            };
            // update the data
            db.collection("contact_form_responses").doc(doc.id).update(newInfo);
            // Update the table
            show_contact_responses();
            // Hide the form
            r_e("contactFormResponseModal").classList.remove("is-active");
            // Show completetion message
            configure_message_bar("Response successfully upadated!");
          }
        });
      });
  });
}
// Hide contact us modal
r_e("contactFormResponseModalBg").addEventListener("click", () => {
  r_e("contactFormResponseModal").classList.remove("is-active");
});

// Table of products for admin dashboard
function show_products() {
  // Update Title text
  r_e("manageShopTableTitle").innerHTML = "Products";
  const PAGE_SIZE = 10;
  let currentPage = 0;
  let numPages = 0;

  function renderTable(startIndex, numToShow) {
    db.collection("products")
      .get()
      .then((data) => {
        let mydocs = data.docs;
        let html = "";

        let endIndex =
          numToShow > 0
            ? Math.min(startIndex + numToShow, mydocs.length)
            : mydocs.length;

        mydocs.slice(startIndex, endIndex).forEach((product, index) => {
          html += `
            <tr>
              <td>
                <figure class="image is-1by1 is-small">
                  <img class="is-rounded" src="${product.data().main_pic}">
                </figure>
              </td>
              <td class="has-text-left">${product.id}</td>
              <td class="has-text-left">${product.data().product_name}</td>
              <td class="has-text-center">${product.data().price}</td>
              <td class="has-text-center">${product.data().sale_price}</td>
              <td class="has-text-center">${product.data().on_sale}</td>
              <td class="has-text-center">${
                product.data().product_description
              }</td>
              <td>
              
                <div class="buttons has-addons is-centered">
                <button class="button is-small" onclick="editProduct('${
                  product.id
                }')"><i class="fas fa-edit"></i></button>
                <button class="button is-danger is-small" onclick="deleteProduct('${
                  product.id
                }')">X</button>
               
              </div> 
              
              </td>
            </tr>
          `;
        });

        document.getElementById("products_table").innerHTML = html;
      });
  }

  function renderPageLinks() {
    let html = "";
    for (let i = 0; i < numPages; i++) {
      html += `
        <a class="pagination-link has-text-white" data-page="${i}">${i + 1}</a>
      `;
    }

    document.getElementById("manageProductsPageLinks").innerHTML = html;
  }

  function showPage(pageNum) {
    let startIndex = pageNum * PAGE_SIZE;
    renderTable(startIndex, PAGE_SIZE);
    currentPage = pageNum;
    updateNavigation();
  }

  function updateNavigation() {
    let prevBtn = document.getElementById("manageProductsPrevPage");
    let nextBtn = document.getElementById("manageProductsNextPage");

    if (prevBtn) {
      prevBtn.disabled = currentPage === 0;
    }

    if (nextBtn) {
      nextBtn.disabled = currentPage === numPages - 1;
    }

    let pageLinks = document.querySelectorAll("#manageProductsPageLinks a");
    pageLinks.forEach((link) => {
      if (parseInt(link.dataset.page) === currentPage) {
        link.classList.add("is-active");
        link.style.backgroundColor = "#b493db";
      } else {
        link.classList.remove("is-active");
        link.style.backgroundColor = "";
      }
    });
  }

  db.collection("products")
    .get()
    .then((data) => {
      numPages = Math.ceil(data.docs.length / PAGE_SIZE);
      renderPageLinks();
      showPage(0);
    });

  document.addEventListener("click", (event) => {
    if (event.target.id === "manageProductsPrevPage") {
      showPage(currentPage - 1);
    } else if (event.target.id === "manageProductsNextPage") {
      showPage(currentPage + 1);
    } else if (event.target.classList.contains("pagination-link")) {
      showPage(parseInt(event.target.dataset.page));
    }
  });
}

// Show the products table
r_e("viewShopProductsBtn").addEventListener("click", () => {
  // Hide the orders table if it was showing
  if (!r_e("ordersTable").classList.contains("is-hidden")) {
    r_e("ordersTable").classList.add("is-hidden");
    r_e("manageOrdersPageLinks").classList.add("is-hidden");
  }
  r_e("productTable").classList.remove("is-hidden");
  r_e("manageProductsPageLinks").classList.remove("is-hidden");
  show_products();
});

// View the orders in the shop
r_e("viewShopOrdersDash").addEventListener("click", () => {
  // Hide the product table if it was showing
  if (!r_e("productTable").classList.contains("is-hidden")) {
    r_e("productTable").classList.add("is-hidden");
    r_e("manageProductsPageLinks").classList.add("is-hidden");
  }
  // Show the orders table
  r_e("ordersTable").classList.remove("is-hidden");
  r_e("manageOrdersPageLinks").classList.remove("is-hidden");
  show_orders();
});

// Edit the Product
function editProduct(id) {
  r_e("editProductModal").classList.add("is-active");
  db.collection("products")
    .doc(id)
    .get()
    .then((product) => {
      r_e("editShopItemName").value = product.data().product_name;
      r_e("editShopItemDescription").value = product.data().product_description;
      r_e("editShopItemInventory").value = product.data().current_inventory;
      r_e("editShopItemRegPrice").value = product.data().price;
      r_e("editShopItemLastUpdated").value = product.data().last_updated;
      r_e("editShopItemSalePrice").value = product.data().sale_price;
      r_e("editShopItemOnSale").checked = product.data().on_sale;
      r_e("editShopItemDateAdded").value = product.data().date_added;
      r_e("editShopItemAddedBy").value = product.data().added_by;
      r_e("editShopItemId").value = product.id;
    });
}

// Submit the form if they choose to
r_e("editProductForm").addEventListener("submit", (e) => {
  // Show Loading button
  r_e("submitEditItem").classList.add("is-loading");
  // prevent the page from auto-refresh
  e.preventDefault();

  // Get the main picture
  let mainPic = r_e("editShopItemMainPic").files[0];
  let task = "";

  if (mainPic) {
    let mainImage = new Date() + "_" + mainPic.name;
    task = ref.child(mainImage).put(mainPic);
  }

  // Check for supplement pictures
  let task1 = "";
  let task2 = "";
  let task3 = "";
  let task4 = "";
  let task5 = "";
  let sup_pics = [];

  for (let index = 1; index < 6; index++) {
    let supPic = r_e(`editShopItemSupPic${index}`).files[0];

    if (supPic) {
      let supImage = new Date() + "_" + supPic.name;
      let taskName = `task${index}`;
      let taskObject = ref.child(supImage).put(supPic);

      eval(`${taskName} = taskObject`);

      taskObject
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .then((url) => {
          sup_pics.push(url);
        });
    }
  }

  // Delay to ensure images get retrieved and properly updated
  setTimeout(function () {
    if (typeof task != "string") {
      task
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .then((url) => {
          // get the information to submit
          let item = {
            product_name: r_e("editShopItemName").value,
            product_description: r_e("editShopItemDescription").value,
            current_inventory: r_e("editShopItemInventory").value,
            price: r_e("editShopItemRegPrice").value,
            sale_price: r_e("editShopItemSalePrice").value,
            on_sale: r_e("editShopItemOnSale").checked,
            date_added: r_e("editShopItemDateAdded").value,
            last_updated: get_current_timestamp(),
            added_by: firebase.auth().currentUser.email,
          };

          if (url) {
            item.main_pic = url;
          }

          if (sup_pics.length > 0) {
            item.supplement_pics = sup_pics;
          }

          // update the data
          db.collection("products")
            .doc(r_e("editShopItemId").value)
            .update(item)
            .then(() => {
              // Show updated table
              show_products();
              // Stop loading button
              r_e("submitEditItem").classList.remove("is-loading");
              // Hide the modal
              r_e("editProductModal").classList.remove("is-active");
              configure_message_bar(
                `${item.product_name} was successfully updated!`
              );
            });
        });
    } else {
      let item = {
        product_name: r_e("editShopItemName").value,
        product_description: r_e("editShopItemDescription").value,
        current_inventory: r_e("editShopItemInventory").value,
        price: r_e("editShopItemRegPrice").value,
        sale_price: r_e("editShopItemSalePrice").value,
        on_sale: r_e("editShopItemOnSale").checked,
        date_added: r_e("editShopItemDateAdded").value,
        last_updated: get_current_timestamp(),
        added_by: firebase.auth().currentUser.email,
      };

      if (sup_pics.length > 0) {
        item.supplement_pics = sup_pics;
      }

      // update the data
      db.collection("products")
        .doc(r_e("editShopItemId").value)
        .update(item)
        .then(() => {
          // Show updated table
          show_products();
          // Stop loading button
          r_e("submitEditItem").classList.remove("is-loading");
          // Hide the modal
          r_e("editProductModal").classList.remove("is-active");
          configure_message_bar(
            `${item.product_name} was successfully updated!`
          );
        });
    }
  }, 2000);
});

// Hide edit product modal
r_e("editProductModalBg").addEventListener("click", () => {
  r_e("editProductModal").classList.remove("is-active");
});

// Delete the Product
function deleteProduct(id) {
  db.collection("products")
    .doc(id)
    .get()
    .then((product) => {
      r_e("confirmDeleteProductModal").classList.add("is-active");
      r_e(
        "confirmDeleteProductMessage"
      ).innerHTML = `Are you sure you want to delete ${
        product.data().product_name
      }? WARNING this cannot be undone`;

      // User selects confirm
      r_e("confirmDeleteProduct").addEventListener("click", () => {
        // Get a reference to the document
        var docRef = db.collection("products").doc(id);

        // Delete the document
        docRef
          .delete()
          .then(() => {
            r_e("confirmDeleteProductModal").classList.remove("is-active");
            configure_message_bar("Product successfully deleted!");
            show_products();
          })
          .catch((error) => {
            configure_message_bar("Error deleting product");
          });
      });
    });
}

// Hide the Modal When Needed
r_e("confirmDeleteProductModalBg").addEventListener("click", () => {
  r_e("confirmDeleteProductModal").classList.remove("is-active");
});
r_e("cancelDeleteProduct").addEventListener("click", () => {
  r_e("confirmDeleteProductModal").classList.remove("is-active");
});

// Show orders on the admin dashboard
function show_orders() {
  // Update Title text
  r_e("manageShopTableTitle").innerHTML = "Orders";
  const PAGE_SIZE = 10;
  let currentPage = 0;
  let numPages = 0;

  function renderTable(startIndex, numToShow) {
    db.collection("orders")
      .get()
      .then((data) => {
        let mydocs = data.docs;
        let html = "";

        let endIndex =
          numToShow > 0
            ? Math.min(startIndex + numToShow, mydocs.length)
            : mydocs.length;

        mydocs.slice(startIndex, endIndex).forEach((order, index) => {
          let total_price = 0;
          let total_products = 0;

          for (let i = 0; i <= order.data().product_ids.length - 1; i++) {
            total_price +=
              parseInt(order.data().product_prices[i]) *
              parseInt(order.data().product_quantities[i]);
            total_products += parseInt(order.data().product_quantities[i]);
          }

          html += `
            <tr>         
              <td class="has-text-left">${order.id}</td>
              <td class="has-text-left">${order.data().user_email}</td>
              <td class="has-text-left">${order.data().order_status}</td>
              <td class="has-text-center">${order.data().date_placed}</td>
              <td class="has-text-center">${
                order.data().requested_completion_date
              }</td>
              <td class="has-text-center">${total_products}</td>
              <td class="has-text-center">$${total_price}</td>
              <td class="has-text-center">${order.data().delivery}</td>

              <td>
              
                <div class="buttons has-addons is-centered">
                <button class="button is-small" onclick="editOrder('${
                  order.id
                }')"><i class="fas fa-edit"></i></button>
                <button class="button is-danger is-small" onclick="deleteOrder('${
                  order.id
                }')">X</button>
               
              </div> 
              
              </td>
            </tr>
          `;
        });

        document.getElementById("orders_table").innerHTML = html;
      });
  }

  function renderPageLinks() {
    let html = "";
    for (let i = 0; i < numPages; i++) {
      html += `
        <a class="pagination-link has-text-white" data-page="${i}">${i + 1}</a>
      `;
    }

    document.getElementById("manageOrdersPageLinks").innerHTML = html;
  }

  function showPage(pageNum) {
    let startIndex = pageNum * PAGE_SIZE;
    renderTable(startIndex, PAGE_SIZE);
    currentPage = pageNum;
    updateNavigation();
  }

  function updateNavigation() {
    let prevBtn = document.getElementById("manageOrdersPrevPage");
    let nextBtn = document.getElementById("manageOrdersNextPage");

    if (prevBtn) {
      prevBtn.disabled = currentPage === 0;
    }

    if (nextBtn) {
      nextBtn.disabled = currentPage === numPages - 1;
    }

    let pageLinks = document.querySelectorAll("#manageOrdersPageLinks a");
    pageLinks.forEach((link) => {
      if (parseInt(link.dataset.page) === currentPage) {
        link.classList.add("is-active");
        link.style.backgroundColor = "#b493db";
      } else {
        link.classList.remove("is-active");
        link.style.backgroundColor = "";
      }
    });
  }

  db.collection("orders")
    .get()
    .then((data) => {
      numPages = Math.ceil(data.docs.length / PAGE_SIZE);
      renderPageLinks();
      showPage(0);
    });

  document.addEventListener("click", (event) => {
    if (event.target.id === "manageOrdersPrevPage") {
      showPage(currentPage - 1);
    } else if (event.target.id === "manageOrdersNextPage") {
      showPage(currentPage + 1);
    } else if (event.target.classList.contains("pagination-link")) {
      showPage(parseInt(event.target.dataset.page));
    }
  });
}

// Modal for confirming order
r_e("showConfirmOrderModalBtn").addEventListener("click", (e) => {
  e.preventDefault();
  r_e("confirmOrderMessage").innerHTML = "Please confirm your order";
  r_e("confirmOrderModal").classList.add("is-active");
});
r_e("confirmOrderModalBg").addEventListener("click", () => {
  r_e("confirmOrderModal").classList.remove("is-active");
});
r_e("cancelPlaceOrder").addEventListener("click", () => {
  r_e("confirmOrderModal").classList.remove("is-active");
});

// Submit the Order (Customer)
r_e("confirmPlaceOrder").addEventListener("click", () => {
  // Get items that might need updating
  let temp_date = [];
  temp_date.push(r_e("month_requested_checkout").value);
  temp_date.push(r_e("day_requested_checkout").value);
  temp_date.push(r_e("year_requested_checkout").value);
  temp_date = temp_date.join("/");
  let requested_completion = temp_date;
  let payment = r_e("payment_checkout").value;
  let delivery = r_e("delivery_checkout").value;
  let name = r_e("name_checkout").value;
  let address1 = r_e("address1_checkout").value;
  let address2 = r_e("address2_checkout").value;
  let city = r_e("city_checkout").value;
  let state = r_e("state_checkout").value;
  let zip = r_e("zipCode_checkout").value;
  let additional_details = r_e("additional_notes_checkout").value;

  db.collection("orders")
    .where("order_status", "==", "CART")
    .where("user_email", "==", firebase.auth().currentUser.email)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.update({
          delivery_info: {
            city: city,
            name: name,
            state: state,
            street_address1: address1,
            street_address2: address2,
            zip_code: zip,
          },
          delivery: delivery,
          payment_method: payment,
          order_status: "Submitted, Pending Approval",
          date_placed: get_date(),
          requested_completion_date: requested_completion,
          additional_details: additional_details,
          payment_status: "Unpaid",
        });
      });
    });

  // close the modal
  r_e("checkoutModal").classList.remove("is-active");
  r_e("confirmOrderModal").classList.remove("is-active");
  // Show confirmation message
  configure_message_bar("Order successfully submitted!");
  r_e("AfterconfirmOrderMessage").innerHTML =
    "Thank you for choosing Georgia Sweets! You will receive an email with confirmation and payment details once the order is accepted by the owner!";
  r_e("AfterconfirmOrderModal").classList.add("is-active");
});

r_e("AfterconfirmOrderModalBg").addEventListener("click", () => {
  r_e("AfterconfirmOrderModal").classList.remove("is-active");
});
r_e("AfterconfirmPlaceOrder").addEventListener("click", () => {
  r_e("AfterconfirmOrderModal").classList.remove("is-active");
});

// Delete Products
function deleteProductEditOrder(
  orderId,
  productId,
  productIndex,
  price,
  quantity,
  totalCost
) {
  db.collection("orders")
    .doc(orderId)
    .get()
    .then((doc) => {
      // Create new arrays that exclude the element at productIndex
      const productPrices = doc
        .data()
        .product_prices.filter((_, i) => i !== productIndex);
      const productQuantities = doc
        .data()
        .product_quantities.filter((_, i) => i !== productIndex);
      const productIds = doc
        .data()
        .product_ids.filter((_, i) => i !== productIndex);

      // Update the Firestore document with the new arrays
      return db.collection("orders").doc(orderId).update({
        product_prices: productPrices,
        product_quantities: productQuantities,
        product_ids: productIds,
      });
    })
    .then(() => {
      // Remove row from table
      const row = document.getElementById(`row-${productIndex}`);
      if (row) {
        row.remove();
      }

      totalCost = totalCost - price * quantity;

      let quantities = 0;
      db.collection("orders")
        .doc(orderId)
        .get()
        .then((order) => {
          order.data().product_quantities.forEach((quantity) => {
            quantities += quantity;
          });

          if (isNaN(totalCost) || totalCost < 0) {
            totalCost = 0;
          }
          r_e("editOrderTotalCost").innerHTML = `$${totalCost}`;
          r_e("editOrderTotalQuantity").innerHTML = quantities;
        });
    })
    .catch((error) => {
      configure_message_bar("Error deleting product from order:", error);
    });
}

// Add products to the order if requested
function addItemtoOrderAdmin() {
  r_e("addItemAdminModal").classList.add("is-active");
  show_products_admin();
}

r_e("addItemAdminModalBg").addEventListener("click", () => {
  r_e("addItemAdminModal").classList.remove("is-active");
});

// Edit the Order
function editOrder(id) {
  r_e("editOrderModal").classList.add("is-active");
  r_e("editOrderTable").innerHTML = "";
  db.collection("orders")
    .doc(id)
    .get()
    .then((order) => {
      r_e("editOrderID").value = order.id;
      r_e("editOrderEmail").value = order.data().user_email;
      r_e("editOrderDatePlaced").value = order.data().date_placed;
      r_e("editOrderAdditionalDetails").value = order.data().additional_details;
      r_e("editOrderDateRequested").value =
        order.data().requested_completion_date;
      r_e("editOrderStatus").value = order.data().order_status;

      r_e("editOrderPayment").value = order.data().payment_method;
      r_e("editOrderDelivery").value = order.data().delivery;
      r_e("editOrderDeliveryName").value = order.data().delivery_info.name;
      r_e("editOrderDeliveryAdress1").value =
        order.data().delivery_info.street_address1;
      r_e("editOrderDeliveryAdress2").value =
        order.data().delivery_info.street_address2;
      r_e("editOrderDeliveryCity").value = order.data().delivery_info.city;
      r_e("editOrderDeliveryState").value = order.data().delivery_info.state;
      r_e("editOrderDeliveryZip").value = order.data().delivery_info.zip_code;

      // Show the Products
      if (order.data().product_ids.length >= 1) {
        let products = order.data().product_ids;
        let prices = order.data().product_prices;
        let quantities = order.data().product_quantities;
        let totalCost = 0;

        for (let i = 0; i < products.length; i++) {
          get_firebase_data("products", products[i], "product_name").then(
            (productName) => {
              const productId = products[i];
              const price = prices[i];
              const quantity = quantities[i];
              totalCost = totalCost + price * quantity;
              const row = `<tr id="row-${i}">
                <td>${productName}</td>
                <td>${price}</td>
                <td>${quantity}</td>
                <td><button class="button is-small is-danger" onclick="deleteProductEditOrder('${order.id}', '${productId}', ${i}, ${price}, ${quantity}, ${totalCost})" id="${i}">Remove</button></td>
              </tr>`;

              r_e("editOrderTable").insertAdjacentHTML("beforeend", row);

              r_e("editOrderTotalCost").innerHTML = `$${totalCost}`;
            }
          );
        }

        r_e("editOrderTotalQuantity").innerHTML = sum(quantities);
      } else {
        // nothing in the cart
      }
    });

  // // Submit the form if they choose to
  // r_e("editProductForm").addEventListener("submit", (e) => {
  //   // Show Loading button
  //   r_e("submitEditItem").classList.add("is-loading");
  //   // prevent the page from auto-refresh
  //   e.preventDefault();
  // });
}

r_e("editOrderModalBg").addEventListener("click", () => {
  show_orders();
  r_e("editOrderModal").classList.remove("is-active");
});

// Table of products for admin to add to an order
function show_products_admin() {
  db.collection("products")
    .get()
    .then((data) => {
      let mydocs = data.docs;
      let html = "";

      mydocs.forEach((product) => {
        html += `
            <tr>
              <td>
                <figure class="image is-1by1 is-small">
                  <img class="is-rounded is-small" src="${
                    product.data().main_pic
                  }">
                </figure>
              </td>
              <td class="has-text-left">${product.data().product_name}</td>
              <td class="has-text-centered">${product.data().price}</td>
              <td class="has-text-centered">
                <div class="button is-small is-primary onclick="add_item_to_order_admin(${
                  product.id
                })""><i class="fa fa-plus has-text-white" aria-hidden="true" onclick="add_item_to_order_admin('${
          product.id
        }')"></i></div>
              </td>
            </tr>
          `;
      });

      document.getElementById("add_products_table").innerHTML = html;
    });
}

// Add an item to the order (admin)
function add_item_to_order_admin(productId) {
  let orderId = r_e("editOrderID").value;
  // Get the product and order
  db.collection("products")
    .doc(productId)
    .get()
    .then((product) => {
      db.collection("orders")
        .doc(orderId)
        .get()
        .then((order) => {
          // Get and update the order
          let product_ids = order.data().product_ids;
          let product_prices = order.data().product_prices;
          let product_quantities = order.data().product_quantities;

          let productIndex = product_ids.indexOf(productId);

          if (productIndex !== -1) {
            product_quantities[productIndex] += 1;
            let rowToRemove = document.getElementById(`row-${productIndex}`);
            if (rowToRemove) {
              rowToRemove.remove();
            }
          } else {
            product_ids.push(productId);
            product_prices.push(product.data().price);
            product_quantities.push(1);
          }

          db.collection("orders").doc(orderId).update({
            product_prices: product_prices,
            product_quantities: product_quantities,
            product_ids: product_ids,
          });
          // Add the product in the modal
          get_firebase_data("products", product.id, "product_name").then(
            (productName) => {
              const productId = product.id;
              const price = product.data().price;
              const quantity = product_quantities[productIndex];
              let totalCost = r_e("editOrderTotalCost").innerHTML;
              totalCost = totalCost.replace(/\$/g, "");
              totalCost = parseInt(totalCost);
              totalCost = totalCost + price * quantity;
              const row = `<tr id="row-${productIndex}">
                  <td>${productName}</td>
                  <td>${price}</td>
                  <td>${quantity}</td>
                  <td><button class="button is-small is-danger" onclick="deleteProductEditOrder('${order.id}', '${productId}', ${productIndex}, ${price}, ${quantity}, ${totalCost})" id="${productIndex}">Remove</button></td>
                </tr>`;

              r_e("editOrderTable").insertAdjacentHTML("beforeend", row);

              r_e("editOrderTotalCost").innerHTML = `$${totalCost}`;
            }
          );
          let quantities = parseInt(r_e("editOrderTotalQuantity").innerHTML);
          r_e("editOrderTotalQuantity").innerHTML = quantities + 1;
        });
    });
  r_e("addItemAdminModal").classList.remove("is-active");
}

// Close the add item to an order modal
r_e("close_add_item_admin").addEventListener("click", () => {
  r_e("addItemAdminModal").classList.remove("is-active");
});

// Submit Editing the Order
r_e("editOrderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  // Get items that might need updating
  let email = r_e("editOrderEmail").value;
  let requested_completion = r_e("editOrderDateRequested").value;
  let status = r_e("editOrderStatus").value;
  let payment = r_e("editOrderPayment").value;
  let delivery = r_e("editOrderDelivery").value;
  let name = r_e("editOrderDeliveryName").value;
  let address1 = r_e("editOrderDeliveryAdress1").value;
  let address2 = r_e("editOrderDeliveryAdress2").value;
  let city = r_e("editOrderDeliveryCity").value;
  let state = r_e("editOrderDeliveryState").value;
  let zip = r_e("editOrderDeliveryZip").value;
  let additional_details = r_e("editOrderAdditionalDetails").value;
  let orderId = r_e("editOrderID").value;
  db.collection("orders")
    .doc(orderId)
    .update({
      delivery_info: {
        city: city,
        name: name,
        state: state,
        street_address1: address1,
        street_address2: address2,
        zip_code: zip,
      },
      delivery: delivery,
      payment: payment,
      order_status: status,
      requested_completion_date: requested_completion,
      user_email: email,
      additional_details: additional_details,
    })
    .then(() => {
      // close the modal
      r_e("editOrderModal").classList.remove("is-active");
      // Show confirmation message
      configure_message_bar("Order successfully updated!");
      // Update the orders table
      show_orders();
    });
});

function deleteOrder(id) {
  // console.log("Delete Order with the id - ", id);

  r_e("confirmDeleteOrderModal").classList.add("is-active");
  r_e(
    "confirmDeleteOrderMessage"
  ).innerHTML = `Are you sure you want to delete the order with the ID - ${id}? WARNING this cannot be undone`;
  // User selects confirm
  r_e("confirmDeleteOrder").addEventListener("click", () => {
    // Get a reference to the document
    var docRef = db.collection("orders").doc(id);
    // Delete the document
    docRef
      .delete()
      .then(() => {
        r_e("confirmDeleteOrderModal").classList.remove("is-active");
        configure_message_bar("Order successfully deleted!");
        show_orders();
      })
      .catch((error) => {
        configure_message_bar("Error deleting order");
      });
  });
}

// Hide the Modal When Needed
r_e("confirmDeleteOrderModalBg").addEventListener("click", () => {
  r_e("confirmDeleteOrderModal").classList.remove("is-active");
});
r_e("cancelDeleteOrder").addEventListener("click", () => {
  r_e("confirmDeleteOrderModal").classList.remove("is-active");
});

// Function called on click of eye icon or text button
function showCustomerOrders() {
  // Hide the shop page
  shoppage.classList.add("is-hidden");
  // Show the customer's orders
  r_e("customerOrdersPage").classList.remove("is-hidden");
  r_e("customerOrdersPage").classList.add("is-active");
  show_orders_customer();
}

function show_orders_customer() {
  get_user_info(firebase.auth().currentUser.email, "full_name").then((name) => {
    r_e("customerOrdersPageTitle").innerHTML = `${name}'s Orders`;
  });

  const PAGE_SIZE = 10;
  let currentPage = 0;
  let numPages = 0;

  function renderTable(startIndex, numToShow) {
    db.collection("orders")
      .where("user_email", "==", firebase.auth().currentUser.email)
      .where("order_status", "!=", "CART")
      .get()
      .then((data) => {
        let mydocs = data.docs;
        let html = "";

        let endIndex =
          numToShow > 0
            ? Math.min(startIndex + numToShow, mydocs.length)
            : mydocs.length;

        mydocs.slice(startIndex, endIndex).forEach((order, index) => {
          let total_price = 0;
          let total_products = 0;

          for (let i = 0; i <= order.data().product_ids.length - 1; i++) {
            total_price +=
              parseInt(order.data().product_prices[i]) *
              parseInt(order.data().product_quantities[i]);
            total_products += parseInt(order.data().product_quantities[i]);
          }

          html += `
            <tr>         
              <td class="has-text-left">${order.id}</td>
              <td class="has-text-left">${order.data().user_email}</td>
              <td class="has-text-left">${order.data().order_status}</td>
              <td class="has-text-center">${order.data().date_placed}</td>
              <td class="has-text-center">${
                order.data().requested_completion_date
              }</td>
              <td class="has-text-center">${total_products}</td>
              <td class="has-text-center">$${total_price}</td>
              <td class="has-text-center" style="max-height: 3em; overflow: hidden; text-overflow: ellipsis;">${
                order.data().delivery
              }</td>
              <td>
                <div class="buttons has-addons is-centered">
                  <button class="button is-small" onclick="editOrderCustomer('${
                    order.id
                  }')"><i class="fas fa-edit"></i></button>               
                </div> 
              </td>
            </tr>
          `;
        });

        document.getElementById("orders_table_customer").innerHTML = html;
      });
  }

  function renderPageLinks() {
    let html = "";
    for (let i = 0; i < numPages; i++) {
      html += `
        <a class="pagination-link has-text-white" data-page="${i}">${i + 1}</a>
      `;
    }

    r_e("manageOrdersCustomerPageLinks").innerHTML = html;
  }

  function showPage(pageNum) {
    let startIndex = pageNum * PAGE_SIZE;
    renderTable(startIndex, PAGE_SIZE);
    currentPage = pageNum;
    updateNavigation();
  }

  function updateNavigation() {
    let prevBtn = document.getElementById("manageOrdersCustomerPrevPage");
    let nextBtn = document.getElementById("manageOrdersCustomerNextPage");

    if (prevBtn) {
      prevBtn.disabled = currentPage === 0;
    }

    if (nextBtn) {
      nextBtn.disabled = currentPage === numPages - 1;
    }

    let pageLinks = document.querySelectorAll(
      "#manageOrdersCustomerPageLinks a"
    );
    pageLinks.forEach((link) => {
      if (parseInt(link.dataset.page) === currentPage) {
        link.classList.add("is-active");
        link.style.backgroundColor = "#b493db";
      } else {
        link.classList.remove("is-active");
        link.style.backgroundColor = "";
      }
    });
  }

  db.collection("orders")
    .where("user_email", "==", firebase.auth().currentUser.email)
    .get()
    .then((data) => {
      numPages = Math.ceil(data.docs.length / PAGE_SIZE);
      renderPageLinks();
      showPage(0);
    });

  document.addEventListener("click", (event) => {
    if (event.target.id === "manageOrdersCustomerPrevPage") {
      showPage(currentPage - 1);
    } else if (event.target.id === "manageOrdersCustomerNextPage") {
      showPage(currentPage + 1);
    } else if (event.target.classList.contains("pagination-link")) {
      showPage(parseInt(event.target.dataset.page));
    }
  });
}

// Edit the Order (Customer)
function editOrderCustomer(id) {
  r_e("editOrderCustomerModal").classList.add("is-active");
  r_e("editOrderCustomerTable").innerHTML = "";
  db.collection("orders")
    .doc(id)
    .get()
    .then((order) => {
      r_e("editOrderCustomerID").value = order.id;
      r_e("editOrderCustomerEmail").value = order.data().user_email;
      r_e("editOrderCustomerDatePlaced").value = order.data().date_placed;

      let date = order.data().requested_completion_date;
      date = date.split("/");
      r_e("editOrderCustomerMonth").value = date[0];
      r_e("editOrderCustomerDay").value = date[1];
      r_e("editOrderCustomerYear").value = date[2];

      r_e("editOrderCustomerStatus").value = order.data().order_status;
      r_e("editOrderCustomerAdditionalDetails").value =
        order.data().additional_details;
      r_e("editOrderCustomerPayment").value = order.data().payment_method;
      r_e("editOrderCustomerDelivery").value = order.data().delivery;
      r_e("editOrderCustomerDeliveryName").value =
        order.data().delivery_info.name;
      r_e("editOrderCustomerDeliveryAdress1").value =
        order.data().delivery_info.street_address1;
      r_e("editOrderCustomerDeliveryAdress2").value =
        order.data().delivery_info.street_address2;
      r_e("editOrderCustomerDeliveryCity").value =
        order.data().delivery_info.city;
      r_e("editOrderCustomerDeliveryState").value =
        order.data().delivery_info.state;
      r_e("editOrderCustomerDeliveryZip").value =
        order.data().delivery_info.zip_code;

      // Show the Products
      if (order.data().product_ids.length >= 1) {
        let products = order.data().product_ids;
        let prices = order.data().product_prices;
        let quantities = order.data().product_quantities;
        let totalCost = 0;

        for (let i = 0; i < products.length; i++) {
          get_firebase_data("products", products[i], "product_name").then(
            (productName) => {
              const productId = products[i];
              const price = prices[i];
              const quantity = quantities[i];
              totalCost = totalCost + price * quantity;
              const row = `<tr id="row-${i}">
                <td>${productName}</td>
                <td>$${price}</td>
                <td>${quantity}</td>
              </tr>`;

              r_e("editOrderCustomerTable").insertAdjacentHTML(
                "beforeend",
                row
              );

              r_e("editOrderCustomerTotalCost").innerHTML = `$${totalCost}`;
            }
          );
        }

        r_e("editOrderCustomerTotalQuantity").innerHTML = sum(quantities);
      } else {
        // nothing in the cart
      }
    });

  // // Submit the form if they choose to
  // r_e("editProductForm").addEventListener("submit", (e) => {
  //   // Show Loading button
  //   r_e("submitEditItem").classList.add("is-loading");
  //   // prevent the page from auto-refresh
  //   e.preventDefault();
  // });
}

r_e("editOrderCustomerModalBg").addEventListener("click", () => {
  r_e("editOrderCustomerModal").classList.remove("is-active");
});

// Submit Editing the Order
r_e("editOrderCustomerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  // Get items that might need updating
  let temp_date = [];
  temp_date.push(r_e("editOrderCustomerMonth").value);
  temp_date.push(r_e("editOrderCustomerDay").value);
  temp_date.push(r_e("editOrderCustomerYear").value);
  temp_date = temp_date.join("/");
  let requested_completion = temp_date;
  let payment = r_e("editOrderCustomerPayment").value;
  let delivery = r_e("editOrderCustomerDelivery").value;
  let name = r_e("editOrderCustomerDeliveryName").value;
  let address1 = r_e("editOrderCustomerDeliveryAdress1").value;
  let address2 = r_e("editOrderCustomerDeliveryAdress2").value;
  let city = r_e("editOrderCustomerDeliveryCity").value;
  let state = r_e("editOrderCustomerDeliveryState").value;
  let zip = r_e("editOrderCustomerDeliveryZip").value;
  let additional_details = r_e("editOrderCustomerAdditionalDetails").value;
  let orderId = r_e("editOrderCustomerID").value;
  db.collection("orders")
    .doc(orderId)
    .update({
      delivery_info: {
        city: city,
        name: name,
        state: state,
        street_address1: address1,
        street_address2: address2,
        zip_code: zip,
      },
      delivery: delivery,
      payment: payment,
      requested_completion_date: requested_completion,
      additional_details: additional_details,
    });
  // Update the orders table
  show_orders_customer();
  // close the modal
  r_e("editOrderCustomerModal").classList.remove("is-active");
  // Show confirmation message
  configure_message_bar("Order successfully updated!");
});

// Back to the shop from customer orders page
r_e("backToShopBtn").addEventListener("click", () => {
  r_e("customerOrdersPage").classList.add("is-hidden");
  r_e("shopPage").classList.remove("is-hidden");
});

// uploading images to availability
// save new data into a collection
function save_data2(coll, obj) {
  db.collection(coll)
    .add(obj)
    .then(() => {
      // show a success message to the user
      configure_message_bar(`image has been uploaded!`);
      // reset the form
      // grab from tag and access the .value and reset it (make it empty string)

      r_e("janpic").value = "";
      r_e("febpic").value = "";
    });
}

// admin uploading jan avail image
r_e("jansubmit").addEventListener("click", () => {
  // getting the image ready
  console.log("here");
  let file = document.querySelector("#janpic").files[0];
  let image = new Date() + "_" + file;

  const task = ref.child(image).put(file);
  task
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .then((url) => {
      // the url of the image is ready now!
      // 4. wrap those in an object
      let Image22 = {
        img_url: url,
      };
      // 5. send the object to firebase

      save_data2("janavail", Image22);
    });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
