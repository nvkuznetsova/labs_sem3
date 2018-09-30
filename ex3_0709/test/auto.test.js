const puppeteer = require('puppeteer');
require('should');
let page;
let browser;

before(async () => {
  browser = await puppeteer.launch({
    waitUntil: 'domcontentloaded',
    headless: false,
    slowMo: 100,
    devtools: false,
    args: [`--window-size=600,400`, `--window-position=50,100`]
  });
  page = await browser.newPage();
});

const cases = [
    {s: 'abc', res: 'CBA'},
    {s: 'zyx', res: 'XYZ'},
    {s: 'qwe', res: 'EWQ'}
];

const URL = 'https://kodaktor.ru/g/autocase';

cases.forEach(({ s, res }) => {
  describe('asyncRev', () => {
    it('should return reverse string', async () => {
      await page.goto(URL);
      page.evaluate(s => document.querySelector('#inp').value = s, s);

      await page.$eval('#button_do', el => el.click());
      (await page.$eval('#ans', el => el.value)).should.equal(res);
    }).timeout(0);
  });
});
