var isEven = (element) => {
    return element % 2 === 0;
}

var result =  [2, 3, 4, 6].every(isEven);
console.log(result);