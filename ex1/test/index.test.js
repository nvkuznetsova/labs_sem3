const { get } = require('axios');
const should = require('should');

const cases = [
  { a : 5, b : 4, s : 9},
  { a : 7, b : 8, s : 15},
  { a : 0.1, b : 0.2, s : 0.3},
  { a : 3, b : -1, s : 2}
];
const headers = {'Content-Type' : 'application/json'};

cases.forEach(({a, b, s}) => {
  const URL = `https://kodaktor.ru/api/add/${a}/${b}`;

  describe('asyncAdd', () => {
    it(`should return ${s} when ${a} is added to ${b}`, async () => {
      const {data : {'Сумма' : sum}} = await get(URL, {headers});
      sum.should.equal(s);
    });
  });
});
