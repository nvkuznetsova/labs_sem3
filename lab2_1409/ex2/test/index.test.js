const should = require('should');
const { get } = require('axios');

const cases = [
  {n1 : 5, n2: 7, res : 12},
  {n1 : 10, n2: 27, res : 37},
  {n1 : 8, n2: 7, res : 15},
  {n1 : 8, n2: 5, res : 13}
];

const headers = {'Content-Type' : 'application/json'};

cases.forEach(({n1, n2, res}) => {
  const URL = `http://localhost:1234/add/${n1}/${n2}`;

  describe('asyncAdd', () => {
    it(`should return ${res} when ${n1} and ${n2} were entered`, async () => {
      const {data : {'Сумма' : sum}} = await get(URL, {headers});
      sum.should.equal(res);
    });
  });
});
