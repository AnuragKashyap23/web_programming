// user defined module
function add(n1, n2) {
    console.log(`Addition - ${n1 + n2}`)
}

function sub(n1, n2) {
    console.log(`Substraction - ${n1 - n2}`)
}

function mul(n1, n2) {
    console.log(`Multiplication - ${n1 * n2}`)
}

function div(n1, n2) {
    console.log(`Division - ${n1 / n2}`)
}

// exporting the math module
module.exports = add
module.exports.mymul = mul
module.exports = { sub, div }