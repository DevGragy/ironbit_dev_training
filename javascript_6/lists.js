var Cons = function (head, tail) {
    this.head = head;
    this.tail = tail;
};

Cons.prototype.isEmpty = false;

var Nil = {
    isEmpty: true,

    get head() {
        throw new Error("Accessing head on empty list.");
    },

    get tail() {
        throw new Error("Accessing tail on empty list.");
    },
};

var list = new Cons(1, new Cons(3, new Cons(42, new Cons(28, Nil))));
var cons = function (head, tail) {
    return new Cons(head, tail);
};

var list = cons(1, cons(3, cons(42, cons(28, Nil))));

var map = function (list, fn) {
    if (list.isEmpty) {
        return list;
    }

    return cons(fn(list.head), map(list.tail, fn));
};

var reduce = function (list, fn, memo) {
    if (list.isEmpty) {
        return memo;
    }

    return reduce(list.tail, fn, fn(memo, list.head));
};

var list = function () {
    if (arguments.length === 0) {
        return Nil;
    }

    var head = arguments[0];
    var tail = [].slice.call(arguments, 1);

    return cons(head, list.apply(null, tail));
};

var myList = list(1, 3, 5);
//=> cons(1, cons(3, cons(5, Nil)));

var myOtherList = myList.map((n) => n * 3);
//=> cons(3, cons(9, cons(15, Nil)));

var nine = myList.reduce((x, y) => x + y);
//=> 9

var listOfLists = list(list(1), list(2), list(3));
//=> cons(cons(1, Nil), cons(cons(2, Nil), cons(cons(3, Nil), Nil)));

var flattened = listOfLists.map((innerList) => innerList.head);
//=> cons(1, cons(2, cons(3, Nil)));
