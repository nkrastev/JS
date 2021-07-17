//You will need local REST service and localhost in order to run these tests
const localAppServerUrl='http://127.0.0.1:8080/';
const localRestServerUrl='http://localhost:3030/jsonstore/messenger';


const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page, context; // Declare reusable variables

describe('E2E tests', function () {
    this.timeout(8000);

    before(async () => {
         browser = await chromium.launch({ headless: false, slowMo: 500 });
        //browser = await chromium.launch();
    });

    after(async () => { await browser.close(); });

    beforeEach(async () => {
        context = await browser.newContext();
        page = await context.newPage();
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

  describe('Test items', function () {
    it('Click on refresh button returns data.', async function () {
      //test if all the messages are loaded and showed on the webpage by clicking the "Refresh" 
      await page.goto(localAppServerUrl);
      await page.click('text="Refresh"');      
      await page.waitForLoadState();

      //get data from textarea      
      const textValues = await page.evaluate(() => document.querySelector('#messages').value);            

      expect(textValues).to.contains('Spami');
      expect(textValues).to.contains('Yep, whats up :?');
      expect(textValues).to.contains('George: Hello, guys!');
     
    });

    it('Click on send. Request to the database is send.', async function () {
      await page.goto(localAppServerUrl);
      await page.fill('[id="author"]', 'Test Author');          
      await page.fill('[id="content"]', 'Test Content');
      const [response] = await Promise.all([
        page.waitForResponse(localRestServerUrl),
        page.click('[id="submit"]')
      ]);    
      
      //ensure the record has been saved in DB
      await page.click('text="Refresh"');      
      await page.waitForLoadState();
      const textValues = await page.evaluate(() => document.querySelector('#messages').value);
      expect(textValues).to.contains('Test Author');

      await browser.close(); 
    });

  })

});


