const Timer = require('timerpromise');

(async () => {
  console.time('t0');
  console.time('t1');

  await new Timer(3).start;
  console.timeEnd('t1');
  console.time('t2');
  await new Timer(2).start;
  console.timeEnd('t2');
  console.timeEnd('t0');
})();
