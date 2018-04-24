//return largest sequence of 5 consecutive numbers found within given number
//number passed as string of digits, should be returned as 5 digit integer
function solution(digits) {
    var max = 0;
    for (var i =0; i <= digits.length - 5; i++)
    //Math.max returns number with highest value
    //.slice() extracts section of string and returns as a new string
    max = Math.max(+digits.slice(i, i + 5), max);
    return max;  
}

function solution(digits) {
    //num.toString() used
    digits = digits.toString();
    var j = 0;
    for (var i = 0; i < digits.length - 4; i++) {
        //parseInt() prses a string and returns integer
        //substr() returns part of string between index and number after it
        var temp = parseInt(digits.substr(i, 5));
        if (temp > j)
            j = temp;
    }
    return j;
}