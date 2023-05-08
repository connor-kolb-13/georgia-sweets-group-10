// import puppeteer
const puppeteer = require("puppeteer");

async function go() {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 15,
  });
  const page = await browser.newPage();

  // site to be tested

  await page.goto("https://georgia-sweets.web.app/");

  //   test sign up feature
  //   user click the signup button
  await page.click("#burgerIcon");
  await page.click("#signUpBtn");

  //   user will provide email, password, and interests information
  await page.type("#f_name_su", "Testingboy2");
  await page.type("#l_name_su", "Jacqmin2");
  await page.type("#username_su", "testyjacqy1232");
  await page.type("#email_su", "testyjacqy123@test.com2");
  await page.type("#password_su", "testy1234!");
  await page.click("#a_type_su");
  //   must select an image in 25 seconds and wait
  await page.click("#profilePic_su");
  await new Promise((r) => setTimeout(r, 25000));
  await page.click("#submitSignUP");

  // test ordering feature
  await page.click("#shopbtn");
  await page.click("#508foqBTSFyvOSXdM1BZ");
  await page.type("#viewProductQuantity", "12");
  await page.click("#viewProductQtyBtn");
  await page.click("#viewProductAddCartBtn");
  await page.click("#burgerIcon");
  await page.click("#shoppingCartBtn");
  await page.click("#checkoutBtn");
  await page.type("#address1_checkout", "505 College Ave");
  await page.type("#address2_checkout", "Apt #2");
  await page.type("#city_checkout", "Madison");
  await page.click("#state_checkout");
  // select correct state
  await new Promise((r) => setTimeout(r, 10000));
  await page.type("#zipCode_checkout", "53703");
  await page.type(
    "#additional_notes_checkout",
    "Thank you so much! This is a test!!!"
  );
  await page.click("#showConfirmOrderModalBtn");
  await page.click("#confirmPlaceOrder");
  // close burger since window is smaller
  await page.click("#burgerIcon");
}

// call the go() function
go();
