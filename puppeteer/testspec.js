const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://angular-6-registration-login-example.stackblitz.io/register');
  await page.screenshot({path: 'screenshot.png'});
  await browser.close();
})();