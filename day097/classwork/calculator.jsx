export default function calculator(a, b, operation) {
    if (operation === "add") {
    return a + b;
    } else if (operation === "minus") {
    return a - b;
    } else if (operation === "multiply") {
    return a * b;
    } else if (operation === "divide") {
    if (b === 0) {
        return "you can't divide by zero";
    }
    return a / b;
    }
}

