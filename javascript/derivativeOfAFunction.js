// https://edabit.com/challenge/Bxp6uGjgmf8TuG8Fe

function derivative(b, x) {
    console.log(b * (Math.pow(x, (b - 1))));
}

derivative(1, 4) // 1

derivative(3, -2) // 12

derivative(4, -3) // -108

// The derivative of x^b is b*(x^(b-1))