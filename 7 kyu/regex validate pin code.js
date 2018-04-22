function validatePin(pin) {
    //new creates instance of user-defined object type
    //RegExp creates reg expression object for matching text with a pattern
    var expression = new RegExp(/^\d{4}$|^\d{6}$/);
    //.test searches for match between reg exp and a specified string
    return expression.test(pin);
}