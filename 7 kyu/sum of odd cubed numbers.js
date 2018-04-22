function cubeOdd(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var cubed = (arr[i] * arr[i] * arr[i]);
        //isNaN() is function to determine if value is NaN or not 
        if (isNaN(cubed)) return undefined;
        if (cubed % 2 != 0) sum += cubed;
    }
    return sum;
}