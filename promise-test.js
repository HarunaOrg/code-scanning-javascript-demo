const pReduce = (values, fn) =>
  values.reduce(
    (prev, ...args) => prev.then(() => fn(...args)),
    Promise.resolve()
  );

const test = () => {}

const test2 = () => {}

module.exports = pReduce;
