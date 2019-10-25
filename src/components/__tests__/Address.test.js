import puppeteer from 'puppeteer';

describe('Address block', () => {
  let browser;
  let page;
  const width = 1920;
  const height = 1080;

  const APP_URL = 'http://localhost:3000/';

  describe('in browser', () => {
    const addressInputSelector = '[data-e2e-id="address-input"]';
    const enterIconSelector = '[data-e2e-id="enter-key-icon"]';

    beforeAll(async () => {
      browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: [`--window-size=${width},${height}`],
      });
      page = await browser.newPage();
      await page.setViewport({
        width,
        height,
      });
      await page.goto(APP_URL);
    });

    afterAll(() => {
      browser.close();
    });

    it('should contain address input', async () => {
      const input = page.$eval(addressInputSelector, el => !!el);

      expect(input).toBeTruthy();
    });

    it('should show address list on request and add address to points list', async done => {
      await page.waitForSelector(addressInputSelector);
      await page.click(addressInputSelector);
      await page.type(addressInputSelector, 'Ульяновск');
      await page.waitForSelector(enterIconSelector);
      await page.keyboard.press('Enter');
      done();
    }, 15000);
  });
});
