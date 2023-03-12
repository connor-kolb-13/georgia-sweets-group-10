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
let = allBtns = [
    homebtn,
    shopbtn,
    gallerybtn,
    dashboardbtn,
    aboutbtn,
    contactbtn,
    reportanissuebtn
];

let homebtn = r_e("homebtn");
let shopbtn = r_e("shopbtn");
let gallerybtn = r_e("gallerybtn");
let dashboardbtn = r_e("dashboardbtn");
let aboutbtn = r_e("aboutbtn");
let contactbtn = r_e("conactbtn");
let reportanissuebtn = r_e("reportanissuebtn");

let currentPage = indexpage;

let = allPages = [
    homepage,
    shoppage,
    gallerypage,
    dashboardpage,
    aboutpage,
    contactpage,
    reportanissuepage
];

let homepage = r_e("homepage");
let shoppage = r_e("shoppage");
let gallerypage = r_e("gallerypage");
let dashboardpage = r_e("dashboardpage");
let aboutpage = r_e("aboutpage");
let contactpage = r_e("conactpage");
let reportanissuepage = r_e("reportanissuepage");


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
    showmodal(indexpage);
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
    hidemodal(indexpage);
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
    hidemodal(indexpage);
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
document.querySelector("#gallerybtn").addEventListener("click", () => {
    // Hide all other pages
    allPages.forEach((page) => {
        if (page.classList.contains("is-active")) {
            hidemodal(page);
        }
    });
    showmodal(dashboardpage);
    hidemodal(indexpage);
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
    hidemodal(indexpage);
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
    hidemodal(indexpage);
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
    hidemodal(indexpage);
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