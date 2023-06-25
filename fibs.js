function fibs(n) {
    const arr = [0, 1]
    if (n <= 0) return 'Enter Positive number';
    if (n == 1) return [0];
    if (n == 2) return arr;
    for (let i = 2; i < n; i++) {
        arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    }
    return arr;
}
console.log(fibs(8));

function fibsRec(num, arr = [0, 1]) {
    if (num <= 0) return 'Enter positive number';
    if (num == 1) return [0];
    if (num == 2) return arr;
    if (arr.length >= num) return arr;
    return fibsRec(num, [...arr, arr[arr.length - 2] + arr[arr.length - 1]]);
}
console.log(fibsRec(8))