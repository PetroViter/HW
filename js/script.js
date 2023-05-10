const generateList = array => {
    const createUl = document.createElement('ul');
    for (let i = 0; i <array.length; i++) {
        const createLi = document.createElement('li');
        if (!Array.isArray(array[i])) {
            createLi.innerHTML = array[i];
        } else {
            const nestedArray = array[i];
            const nestedArrayUl = document.createElement('ul')
            for (let j = 0; j < nestedArray.length; j++) {
                const nestedArrayLi = document.createElement('li')
                nestedArrayLi.innerHTML = nestedArray[j];
                nestedArrayUl.appendChild(nestedArrayLi)
            }
            createLi.appendChild(nestedArrayUl)
        }
        createUl.appendChild(createLi)
    }
    document.body.appendChild(createUl)
}
generateList(  [1,2, [1.1,1.2,1.3] ,3])

