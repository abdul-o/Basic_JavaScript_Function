
// Check for the highest number (MMETHOD ONE)
let num = [1, 4, 7, 8, 9]

function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;

    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

console.log(myArrayMax(num));



// Check for the highest number (METHOD TWO)

function maxNumber() {
    return Math.max(3, 56, 7, 9, 4);
}

console.log(maxNumber());