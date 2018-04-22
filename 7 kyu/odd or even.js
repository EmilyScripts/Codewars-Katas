function oddOrEven(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if (sum % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}