const { get } = require('axios');
const a = 78;
const b = 99;
const URL = `https://kodaktor.ru/api/add/${a}/${b}`;

const headers = {'Content-Type' : 'application/json'};
(async () => {
  const {data : {'Сумма' : s}} = await get(URL, {headers});
  console.log(s);
})();
