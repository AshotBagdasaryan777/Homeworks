1.;
const array = [1, 2, 3, 4, 5, null, undefined, {}];
function uniqueEl(array) {
    for (let i = 0; i < array.length; i++) {

        for (let j = array.length - 1; j >= 0; j--) {
            if (!array[i] === array[j]) {
                return true;
            } else {
                return false;
            }
        }

    }
}
console.log(uniqueEl(array));
2.;
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
function sumNumbers(arr) {
    let sum = 0;
    for (const el of arr) {
        sum += el;
    }
    return sum;
}
console.log(sumNumbers(arr));
3.;
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
function productEl(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        let product = 1;
        let maxProduct = 1;

        product = arr1[i] * arr1[i + 1];
        if (maxProduct >= product) {
            product = maxProduct;
            return maxProduct;

        } else {
            return product;
        }

    }
}
console.log(productEl(arr1));
4.;
const array1 = [17, 18, 25, 67, 89, 3, 4, 7];
let el = 7;
function sortedArray(array1) {
    return array1.sort((a, b) => a - b);
}
function binarySearch(array1, el) {
    let firstIndex = 0;
    let lastIndex = array1.length - 1;
    let middleIndex;
    while (firstIndex <= lastIndex) {
        middleIndex = Math.round(lastIndex - firstIndex) / 2;
        if (array1[middleIndex] === el) {
            return middleIndex;
        } else if (array1[middleIndex] < el) {
            firstIndex = middleIndex + 1;
        } else {
            lastIndex = middleIndex - 1;
        }
    } return -1;
}
console.log(binarySearch(array1));
