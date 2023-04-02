const myFunction = (callback) => {
    const num = prompt('Enter number')
    const degree = prompt('Enter degree')
    callback(num, degree)
}

myFunction(exponentiation = (a, b) => {
    const result = a ** b
    alert(result)
})