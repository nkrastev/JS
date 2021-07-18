const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page, context; // Declare reusable variables

describe('E2E tests', function () {
    this.timeout(15000);

    before(async () => {
        // browser = await chromium.launch({ headless: false, slowMo: 500 });
        browser = await chromium.launch();
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
    it('Testing: load books', async function () {
        //This test is empty cause it will fail if there is no data in the service. Load button has been tested in the next tests.                       
    });

    it('Testing: add book, valid data', async function () {
        await page.goto('http://localhost:3000/');       
        await page.waitForLoadState();
        
        await page.fill('#createForm > input[type=text]:nth-child(3)', 'Test title');          
        await page.fill('#createForm > input[type=text]:nth-child(5)', 'Test author');
        await page.click('text="Submit"')
                  
        //ensure the record has been saved in DB
        await page.click('text="LOAD ALL BOOKS"');      
        await page.waitForLoadState();
        const textValues = await page.evaluate(() => document.querySelector('body > table').textContent);        
        expect(textValues).to.contains('Test author');
        expect(textValues).to.contains('Test title');        
    });

    it('Testing: add book, Empty Author or Title', async function () {
        await page.goto('http://localhost:3000/');       
        await page.waitForLoadState();
        
        await page.fill('#createForm > input[type=text]:nth-child(3)', '');          
        await page.fill('#createForm > input[type=text]:nth-child(5)', 'Test author');
        await page.click('text="Submit"')

        page.on('dialog', dialog => dialog.accept());

        await page.fill('#createForm > input[type=text]:nth-child(3)', 'Valid title');          
        await page.fill('#createForm > input[type=text]:nth-child(5)', '');
        await page.click('text="Submit"');

        page.on('dialog', dialog => dialog.accept());
                                  
    });

    it('Testing: add book, check if request is correct (POST)', async function () {
        await page.goto('http://localhost:3000');       
        await page.waitForLoadState();        
                
        await page.fill('#createForm > input[type=text]:nth-child(3)', 'Valid title');          
        await page.fill('#createForm > input[type=text]:nth-child(5)', 'Valid author');         

        const [request] = await Promise.all([
            page.waitForRequest('**' + '/collections/books'),
            page.click('text="Submit"')
        ]);

        expect(request.method()).to.equal('POST');                                 
    });

    it('Testing: edit book check if request is correct (PUT)', async function () {
        await page.goto('http://localhost:3000');       
        await page.waitForLoadState();

        await page.click('text="LOAD ALL BOOKS"');      
        await page.waitForLoadState();

        await page.click('body > table > tbody > tr:nth-child(1) > td:nth-child(3) > button.editBtn');
              
        const [request] = await Promise.all([
            page.waitForRequest('**' + '/collections/books/'+'**'),
            page.click('#editForm > button')
        ]);

        expect(request.method()).to.equal('PUT');
                
    });

    it('Testing: edit make the other form visible', async function () {
        await page.goto('http://localhost:3000');       
        await page.waitForLoadState();
        
        //add some data, ensure form is not empty
        await page.fill('#createForm > input[type=text]:nth-child(3)', 'Valid title for update');          
        await page.fill('#createForm > input[type=text]:nth-child(5)', 'Valid author for update'); 
        await page.click('text="Submit"'); 
        
        await page.click('text="LOAD ALL BOOKS"');      
        await page.waitForLoadState();

        await page.click(":nth-match(:text('Edit'), 1)");

        await page.fill('#editForm > input[type=text]:nth-child(4)', 'UPDATED VALUE');
                
        const theSaveButton = await page.evaluate(() => document.querySelector('#editForm > button').textContent);        
        expect(theSaveButton).to.contains('Save');                               
                    
    });

    it('Testing: edit the data from input form is contained in the table', async function () {
        await page.goto('http://localhost:3000');       
        await page.waitForLoadState();
        
        //add some data, ensure form is not empty
        await page.fill('#createForm > input[type=text]:nth-child(3)', 'some Valid title for update');          
        await page.fill('#createForm > input[type=text]:nth-child(5)', 'some Valid author for update'); 
        await page.click('text="Submit"'); 
        
        await page.click('text="LOAD ALL BOOKS"');      
        await page.waitForLoadState();

        await page.click(":nth-match(:text('Edit'), 1)");
        
                
        const theInputFieldData = await page.evaluate(() => document.querySelector('#editForm > input[type=text]:nth-child(4)').value);        
        const theTableData=await page.evaluate(() => document.querySelector('body > table').textContent); 
        expect(theTableData).to.contains(theInputFieldData);                               
                    
    });

    it('Testing: delete book', async function () {
        await page.goto('http://localhost:3000');       
        await page.waitForLoadState();
        
        //add data which is going to be deleted
        await page.fill('#createForm > input[type=text]:nth-child(3)', 'Valid title if the table is empty this one will be deleted');          
        await page.fill('#createForm > input[type=text]:nth-child(5)', 'Valid author if the table is empty this one will be deleted'); 
        await page.click('text="Submit"'); 
        
        await page.click('text="LOAD ALL BOOKS"');      
        await page.waitForLoadState();
        
        //confirm deletion of first record

        const [request] = await Promise.all([
            page.waitForRequest('**' + '/collections/books/'+'**'),
            page.click('text="Delete"'),
            page.on('dialog', dialog => dialog.accept())
        ]);

        expect(request.method()).to.equal('DELETE');              
       
        await browser.close();          
    });

    

  })

});


