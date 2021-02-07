function numbers(param) {
    const random = Math.random();
    return Math.round(random * param);
  }

//console.log(numbers(100));

module.exports = numbers;