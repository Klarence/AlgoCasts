// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(let i=0; i < arr.length; i++) {
        for(let j=0; j < (arr.length - i - 1); j++) {
            if(arr[j] > arr[j+1]){
                let lesser = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = lesser;
            }
        }
    }

    return arr;
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let indexOfMin = i;

        for(let j = i + 1; i < arr.length; j++){

            if(arr[j] < arr[indexOfMin] ){
                indexOfMin = j;
            }
            if(indexOfMin !== i ) {
                let lesser = arr[indexOfMin];
                arr[indexOfMin] = arr[i];
                arr[i] = lesser;

            }
        }
    }

    return arr;

}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const centerIndex = Math.floor(arr.length / 2);
    const left = arr.slice(0, centerIndex);
    const right = arr.slice(centerIndex);

    return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
    const results = [];

    while(left.length && right.length){
        if(left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
    // concat
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
