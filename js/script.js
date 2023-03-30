const arr = [1, 2, 3, -1, -2, -3]

const arrayNumber = (arr) => {
    let exampleArr = []
    if (arr.length === 0) return 'Ошибка'
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            exampleArr.push(arr[i])
        }
    }
    if (exampleArr !== null) return exampleArr
        else {
        return null
    }
}
arrayNumber(arr);




