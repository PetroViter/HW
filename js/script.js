for (let li of document.querySelectorAll('li')) {
        console.log(li);
}

const li = document.querySelectorAll('li')
console.log(li.length);

const arrLi = [];
for (let i = 0; i < li.length; i++) {
    arrLi[i] = li[i].textContent;
}
console.log(arrLi)