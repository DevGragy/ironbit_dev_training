function naturalNumbers() {
    function _stream(n) {
        return {
            value: n,
            next() {
                return _stream(n + 1);
            },
        };
    }

    return () => _stream(1);
}

const nats = naturalNumbers();
const one = nats();
const two = one.next();
const three = two.next();

console.log(one.value);
console.log(two.value);
console.log(three.value);

function take(n, str) {
    function _take(n, str, accum) {
        if (n === 0) {
            return accum;
        }

        const {value, next} = str();

        return _take(n - 1, next, accum.concat(value));
    }

    return _take(n, str, []);
}

function fibonacciSequence() {
    function _stream(current, next) {
        return {
            value: current,
            next() {
                return _stream(next, current + next);
            },
        };
    }

    return () => _stream(0, 1);
}

const fibs = fibonacciSequence();
const firstTen = take(10, fibs);

console.log(firstTen);
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

function map(fn, originalStr) {
    function _stream(str) {
        const {value, next} = str();

        return {
            value: fn(value),
            next() {
                return _stream(next);
            },
        };
    }

    return () => _stream(originalStr);
}

fibonacci - mapped.jslink;
function first(array) {
    return array[0];
}

const fibs2 = map(
    first,
    stream(([current, next]) => [next, current + next], [0, 1])
);

console.log(take(10, fibs));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

function filter(fn, originalStr) {
    function _stream(str) {
        const {value, next} = str();

        if (fn(value)) {
            return {
                value,
                next() {
                    return _stream(next);
                },
            };
        }

        return _stream(next);
    }

    return () => _stream(originalStr);
}


const nats2 = stream(n => n + 1, 1);
const oddNumbers = filter(n => n % 2 !== 0, nats);
const gte42 = filter(n => n >= 42, nats);
 
console.log(take(10, oddNumbers));
// [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
 
console.log(take(10, gte42));
// [42, 43, 44, 45, 46, 47, 48, 49, 50, 51]