function getMiddle(str) {
    var position
    var length

    if (str.length % 2 == 1) {
        position = str.length / 2;
        length = 1;
    } else {
        position = str.length / 2 - 1;
        length = 2;
    }
    //substring returns subset of string between 2 indexes
    return str.substring(position, position + length)
}