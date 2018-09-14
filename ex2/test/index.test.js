const { get } = require('axios');
const should = require('should');

const cases = [
  { a : 5, r : 5},
  { a : 7, r : 7},
  { a : 8, r : 8},
  { a : 12, r : 12}
];
const URLs = [
  'http://kodaktor.ru/api2/there/',
  'http://kodaktor.ru/api2/andba/',
];
const headers = {'Content-Type' : 'application/json'};

cases.forEach(({a, r}) => {
  describe('asyncFunc', () => {
    it(`should return ${r} when ${a} is entered`, async () => {
      for (url of URLs) {
        const { data : res} = await get(url+a, {headers});
        a = res;
        console.log(a);
      }
      a.should.equal(r);
    });
  });
});
