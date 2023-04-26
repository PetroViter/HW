// IndexOf
const funcIndexOf = (arr, searchElement, fromIndex = 0) => {
    if (fromIndex >= arr.length ) return -1;
    if (fromIndex < 0) fromIndex += arr.length;
    for (let i = fromIndex; i < arr.length ; i++)
        if (arr[i] === searchElement) return i;
        return -1;

}
const numbers = [5, 6, 1, 4, 2, 5]
funcIndexOf(numbers, 6, -5)

// lastIndexOf
const  lastIndexOf = (arr,searchElement, fromIndex = 0 ) => {
    if (fromIndex > arr.length) return -1;
    if (fromIndex < 0) arr.length += fromIndex ;
    for (let i = arr.length - 1; i >= 0; i--)
        if (arr[i] === searchElement) return i
        return -1;
}
const last = [1, 2, 3, "a", "b", "c"];
lastIndexOf(last, 3, -1)

// find
const elements = [2, 4, 8, 19, 32]
const find1 =  (arr, callback, thisArg) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback.call(thisArg,arr[i],arr)) return arr[i]
    } return undefined
}
find1(elements, num = (item) =>  item > 32)

// findIndex
const findIndex =  (arr, callback, thisArg) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback.call(thisArg,arr[i],arr)) return i;
    } return -1;
}
findIndex(elements, num = (item) =>  item > 32)

//includes
const includes = (arr, searchElement, fromIndex = 0) => {
    if (fromIndex >= arr.length ) return false;
    if (fromIndex < 0) fromIndex += arr.length;
    for (let i = fromIndex; i < arr.length ; i++)
        if (arr[i] === searchElement) return true;
    return false;

}
const numbers1 = [5, 6, 1, 4, 2, 5]
includes(numbers1, 6, -5)

//every some
const every =  (arr, callback, thisArg) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback.call(thisArg,arr[i],arr)) return true
    } return false
}
every(elements, num = (item) =>  item > 33 )
const some =  (arr, callback, thisArg) => {
    for (let i = 0; i < arr.length; i++) {
        if (!callback.call(thisArg,arr[i],arr)) return false
    } return true
}
some(elements, num = (item) =>  item > 3)