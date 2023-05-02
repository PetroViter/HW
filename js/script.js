const flat = (...arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        if (Array.isArray(elem)) {
            newArr.push(...flat(...elem));
        } else {
            newArr.push(elem);
        }
    }
    return newArr;
}

console.log(flat([['a', 'b', [1, 2, 3], [4, 5]], ['d', ['e', 'f']]]));