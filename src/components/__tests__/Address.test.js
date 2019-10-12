import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Address } from '../Address';
import puppeteer from 'puppeteer';

configure({ adapter: new Adapter() });

describe('Address block', () => {
  let browser;
  let page;
  const width = 1920;
  const height = 1080;

  const APP_URL = 'http://localhost:3000/';
  
  it('should match the snapshot', () => {
    const address = shallow(
      <Address
        addresses={[]}
        fetchAddressList={() => {}}
        addPoint={() => {}}
      />
    );

    expect(address).toMatchSnapshot();
  });

  describe('in browser', () => {
    const addressInputSelector = '.address-input-block input[type="text"]';
    const addressListItemSelector = '.address-list .address-item';
    
    beforeAll(async () => {
      browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: [`--window-size=${width},${height}`],
      });
      page = await browser.newPage();
      await page.setViewport({ width, height });
      await page.goto(APP_URL);
    });

    afterAll(() => {
      browser.close();
    });
    
    it('should contain address input', async () => {
      const input = page.$eval(addressInputSelector, (el) => !!el);

      expect(input).toBeTruthy();
    });
    
    it('should show address list on request and add address to points list', async done => {      
      page.on('response', async (response) => {
        if (response.url().includes('/addresses')) {
          const addressItems = await page.$$(addressListItemSelector);

          expect(addressItems.length).toBeGreaterThan(0);

          done();
        }
      });
      
      await page.waitForSelector(addressInputSelector);
      await page.click(addressInputSelector);
      await page.type(addressInputSelector, 'Ульяновск');
      await page.waitForNavigation({waitUntil: "networkidle0"});
    }, 15000);
  });
});