function * counter (value) {
  while (true) {
    console.log('value:', value);
    const step = yield value++;
    // yield step;
    // console.log('value:', value);
    console.log('step:', step);
    if (step) {
      if (step > value) value += step;
      else value = step;
    }
  }
}

const generatorFunc = counter(0);
console.log(generatorFunc.next().value); // 0
console.log(generatorFunc.next().value); // 1
console.log(generatorFunc.next().value); // 2
console.log(generatorFunc.next(1).value); // 3
console.log(generatorFunc.next(10).value); // 14
console.log(generatorFunc.next().value); // 15
console.log(generatorFunc.next(10).value); // 26
