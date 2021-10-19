// Curried Function

function getDiscount(price, rate) {
  return price * rate
}

console.log(getDiscount(10000, 0.1))

// arrow func
const getDiscountArrowFun = (price, rate) => price * rate
console.log(getDiscountArrowFun(10000, 0.2))
