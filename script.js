/*****************************
 JavaSctipt Charlotte Meetup
*****************************/
// Var leaks out of the {} when used in "if" and "for" statements
/*
function baz() {
    var x = 2;
    console.log(x)
    return x;
}
baz()
*/

// Declare variables at the start of the function
// Otherwise, they will not be called, and you will often get 'undefined'

function foo() {
    var j = 0;
    return  function () {
        j++;
        console.log(j);
    };
}

var result = foo();

//foo is a higher order function, because it returns a function
// var j is in the scope of for (variable of iterable) {
