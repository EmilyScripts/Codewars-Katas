//return length of shortest word in a given string
function findShort(text) {
    var arr = text.split(' ');
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length < smallest.length) {
            smallest = arr[i];
        } 
    }
    return smallest.length;
}