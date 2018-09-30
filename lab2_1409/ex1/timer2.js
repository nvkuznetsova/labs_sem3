const { performance,
  PerformanceObserver } = require('perf_hooks');
const Timer = require('timerpromise');

const observe = new PerformanceObserver((t) => {
  console.log(t.getEntries()[0].duration);
});
observe.observe({ entryTypes : ['measure'] });

(async () => {
  performance.mark('t0');
  await new Timer(3).start;
  performance.mark('t1');
  performance.measure('Timer1', 't0', 't1');
  await new Timer(2).start;
  performance.mark('t2');
  performance.measure('Timer2', 't1', 't2');
  performance.measure('AllTimers', 't0', 't2');
})();
