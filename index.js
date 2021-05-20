function convertFahrToCelsius(farenheight) {
    // check if argument is a not a number
    if (isNaN(farenheight)) {
        return `${farenheight} is not a valid number but a ${typeof (farenheight)}`
    } 
    // if argument is a number
    else {
       let converted = (`${farenheight}` - 32) * 5 / 9
        converted = converted.toFixed(4)
        return `${converted} °C`
    }
}

// console the result
console.log(convertFahrToCelsius(12))

function checkYuGiOh(n) {
    // check if argument is a number
    if (!isNaN(n)) {
        var arr = []
        for (let i = 0; i < n; i++) {
            // loop through empty array and add one
            arr.push(i + 1)
        }
        arr.map((num, index, array) => {
            // <--- Initialize variable to be swapped--->
            let newNum = ``;
            if (num % 2 === 0) {
                newNum = `yu`;
            }
            if (num % 3 === 0) {
                if (newNum.length > 0) {
                    newNum = `${newNum}-gi`;
                } else {
                    newNum = `gi`;
                }
            }
            if (num % 5 === 0) {
                if (newNum.length > 0) {
                    newNum = `${newNum}-ho`;
                } else {
                    newNum = `ho`;
                }
            }
            if (newNum.length > 0) {
                return (array[index] = newNum);
            }
            return num;
        });
        return arr;
    } else {
        // checks if argument is an array
        if (arr.isArray(n)) {
            return `invalid parameter: [${n}]`;
        } else if (!arr.isArray(n) && typeof n === 'object') {
            // checks if argument is an Object
            let nToString = JSON.stringify(n).split(`\"`).join('');
            return `invalid parameter: ${nToString}`;
        }
        let nToString = n.split(`\"`).join('');
        return `invalid parameter: '${nToString}'`;
    }
}

console.log(checkYuGiOh(12))
