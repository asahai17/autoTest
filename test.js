const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.goto('https://swap.defillama.com');

  const res = await page.evaluate(() => {
    let head = document.querySelectorAll()
  })

  setTimeout(function(){
    console.log('prekshu');
}, 12255422);
})();

