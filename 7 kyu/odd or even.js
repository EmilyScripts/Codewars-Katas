//given array of numbers, return if sum of numbers is odd or even
//empty input should be considered [0] so 'even'
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