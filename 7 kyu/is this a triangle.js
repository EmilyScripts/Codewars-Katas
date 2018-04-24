//create method that accepts 3 intergers and return if a triangle can be built in true or false
function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}