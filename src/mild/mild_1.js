/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    let c = a + b;
    return " " + a + " + " + b + " = " + c;
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    let length = (endNumber - startNumber)
    let arr = [];
    for (let i=0; i<=length; i++) {
        arr[i] = startNumber++;
    }
    return arr;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    return {
        max: Math.max(...numbers),
        min: Math.min(...numbers)
    }
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    let n = array.length;
    let counter = new Array();
    let name = new Array();
    let final = new Array();
    let visited = Array.from({length: n}, (_, i) => false);

    for (let i=0; i < n; i++) {

        if (visited[i] == true) {
            continue;
        }
        
        name[i] = array[i];

        let count = 1;
        for (let j=i+1; j<n; j++) {
            if (array[i] = array[j]) {
                visited[j] = true;
                count++;
            }
        }

        counter[i] = count;

    }
    let finalLength = name.length;
    for (let i=0; i<finalLength; i++) {
        final[i] = "" + name[i] + ": " + counter[i] + ", ";
    }

    return final;
}
