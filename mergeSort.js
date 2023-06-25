function mergeSort(arr) {
    //break array in half.
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(leftside, rightside) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < leftside.length && j < rightside.length) {
        if (leftside[i] < rightside[j]) {
            result.push(leftside[i])
            i++;
        } else {
            result.push(rightside[j])
            j++;

        }
    }
    while (i < leftside.length) {
        result.push(leftside[i])
        i++;
    }
    while (j < rightside.length) {
        result.push(rightside[j])
        j++
    }
    return result;
}
console.log(mergeSort([1, 5, 4, 3, 5, 8, 2, 9, 6]))