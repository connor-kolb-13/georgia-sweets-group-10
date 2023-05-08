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
  await page.type("#email_su", "testyjacqy123@test2.com");
  await page.type("#password_su", "testy1234!");
  await page.click("#a_type_su");
  //   must select an image in 25 seconds and wait
  await page.click("#profilePic_su");
  await new Promise((r) => setTimeout(r, 25000));
  await page.click("#submitSignUP");
}

// call the go() function
go();
