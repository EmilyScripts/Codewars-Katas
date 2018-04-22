function count(array) {
    var total = {};
    for (var i = 0; i < array.length; i++) {
        if (total[array[i]] == undefined)
            total[array[i]] = 1;
        else
            total[array[i]]++;
    }
    return total;
}


function count(array) {
    total = { };
    for (var i = 0; i < array.length; i++) {
        if (!total [array[i]])
            total[array[i]] = 0;
            total[array[i]]++;
    }
    return total;
}