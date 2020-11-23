const scrape = require('website-scraper');
const PuppeteerPlugin = require('website-scraper-puppeteer');
const path = require('path');

scrape({
  // Provide the URL(s) of the website(s) that you want to clone
  // In this example, you can clone the Our Code World website
  urls: ['https://srednja.hr/', 'https://www.srednja.hr/faks/objavljen-popis-studija-ciji-studenti-imaju-pravo-stem-stipendiju-provjerite-li-vas-medu-njima/', 'https://www.srednja.hr/srednja-kalkulator/', 'https://www.srednja.hr/kalkulator-matura/', 'https://www.srednja.hr/korisnik/dujekovacevic/', 'https://www.srednja.hr/faks/ne-da-se-pisati-seminarski-pa-ces-platiti-nekome-da-napise-nisi-neposten-vec-jako-glup/'],
  // Specify the path where the content should be saved
  // In this case, in the current directory inside the ourcodeworld dir
  directory: path.resolve(__dirname, 'srednja'),
  // Load the Puppeteer plugin
  plugins: [
    new PuppeteerPlugin({
      launchOptions: {
        // If you set  this to true, the headless browser will show up on screen
        headless: true
      }, /* optional */
      scrollToBottom: {
        timeout: 10000,
        viewportN: 10
      } /* optional */
    })
  ]
});
