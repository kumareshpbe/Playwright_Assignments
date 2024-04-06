import { test, chromium } from "@playwright/test";

test("Test salesforce login", async () => {

    //To launch the browser
    const browser = await chromium.launch({ headless: false, channel: "chrome" });
    //Create a browser context
    const browserContext = await browser.newContext();
    //Create a new page
    const page = await browserContext.newPage();

    await page.goto("https://login.salesforce.com/")
    await page.fill('#username', 'kumareshpbe@gmail.com')
    await page.fill('#password', 'testleaf@01')
    await page.click("#Login")
    await page.waitForTimeout(10000)

    console.log("Title: ",await page.title())
    console.log("URL: ",page.url())


    await page.close();
    //Close the context
    await browserContext.close();
    //Close the browser instance
    await browser.close();

})

