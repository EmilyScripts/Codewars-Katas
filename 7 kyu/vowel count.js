//return number of vowels in given string
function getCount(str) {
    var vowelsCount = 0;
    var string = str.toString();
    for (var i = 0; i <string.length; i++) {
        if (string.charAt(i) == 'a' || string.charAt(i) == 'e' || string.charAt(i) == 'i' || string.charAt(i) == 'o' || string.charAt(i) == 'u') {
           vowelsCount++; 
        }
    }
    return vowelsCount;
}