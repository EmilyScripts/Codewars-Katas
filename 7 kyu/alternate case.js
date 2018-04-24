//switch every letter in string from upper to lower or lower to upper case
function alternateCase(str) {
    var resultStr = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            resultStr += str[i].toUpperCase();
        } else if (str[i] === str[i].toUpperCase()) {
            resultStr += str[i].toLowerCase();
        } else {
            resultStr += str[i];
        }
    }
    return resultStr;
}