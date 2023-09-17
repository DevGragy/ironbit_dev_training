var foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
    }
    alert(foo);
}
bar();
// If it surprises you that the answer is “10”, then this one will probably really throw you for a loop:

var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
alert(a);


var x = 1;
console.log(x); // 1
if (true) {
	var x = 2;
	console.log(x); // 2
}
console.log(x); // 2

function foo() {
	var x = 1;
	if (x) {
		(function () {
			var x = 2;
			// some other code
		}());
	}
	// x is still 1.
}

function test() {
	foo(); // TypeError "foo is not a function"
	bar(); // "this will run!"
	var foo = function () { // function expression assigned to local variable 'foo'
		alert("this won't run!");
	}
	function bar() { // function declaration, given the name 'bar'
		alert("this will run!");
	}
}
test();