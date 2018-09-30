const { get } = require('axios');
const should = require('should');

const cases = [...Array(30).keys()];
const URLs = [
  'http://kodaktor.ru/api2/there/',
  'http://kodaktor.ru/api2/andba/',
];
const headers = {'Content-Type' : 'application/json'};

cases.forEach((el) => {
  let a = el;
  describe('asyncFunc', () => {
    it(`should return the same number that was entered - ${el}`, async () => {
      for (url of URLs) {
        const { data : res} = await get(url+a, {headers});
        a = res;
        //console.log(a);
      }
      //console.log(el);
      a.should.equal(el);
    });
  });
});
