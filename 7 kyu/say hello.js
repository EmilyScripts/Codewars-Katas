//write function to greet perso, function takes name as input
//return null if empty or null/nil
function greet(name) {
    if (name === null || name === '') {
        return null;
    } else {
        return 'hello ' + name + '!';
    }
}