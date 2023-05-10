const ulId = document.querySelector('#ulId');
const attr = ulId.attributes;
console.log(attr)

for (let i of attr) {
    console.log(i);
}

const attrValueArray = [];
const attrNameArray = [];
for (let i = 0; i < attr.length; i++) {
    attrValueArray[i] = attr[i].value;
    attrNameArray[i] = attr[i];
}
console.log(attrValueArray);
console.log(attrNameArray);

const li = document.querySelectorAll('li')
li[9].textContent = 'Привет, меня зовут Петр'
li[0].setAttribute('data-my-name', 'Petro')

const ul = document.querySelector('ul');
ul.removeAttribute('data-dog-tail');
console.log(ul)


