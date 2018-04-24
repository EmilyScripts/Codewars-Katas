//reverse message into lower case with first letter capitalised
function reverseMessage(str) {
    var reversed = str.toLowerCase().split('').reverse();
    reversed = reversed.join('').split(' ');
    var newArr = [];
    for (var i = 0; i <reversed.length; i++) {
        var firstLetter = reversed[i].charAt(0).toUpperCase();
        var restOfWord = reversed[i].slice(1);
        newArr[i] = firstLetter + restOfWord;
    }
    return newArr.join(' ');
}