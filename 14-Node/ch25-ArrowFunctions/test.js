// Curried Function

function getDiscount(price, rate) {
  return price * rate
}

// console.log(getDiscount(10000, 0.1))

// arrow func
const getDiscountArrowFun = (price, rate) => price * rate
// console.log(getDiscountArrowFun(10000, 0.2))


const doDiscount = function getDiscount(rate) {
  return function (price) {
    return rate * price
  }
}

// arrow func
const doDiscountArrowFun = rate => price => rate * price

const getTenpercentOff = doDiscountArrowFun(0.1)

// getTenpercentOff(price);

console.log(getTenpercentOff(1000))
/*
f(x) = x + 1
g(x) = x^2
h(x) = f(g(x))
*/