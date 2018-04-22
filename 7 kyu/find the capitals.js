function capitals(word) {
    var array = [];
    for (var i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            array.push(i);
        }
    }
    return array;
}