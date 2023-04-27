
function curriedSum(numArgs) {
    let numbers = [];

    return function _curriedSum(num) {
        numbers.push(num);

        if (numbers.length === numArgs) {
            return addNum(numbers);
        } else {
            return _curriedSum;
        };
    };
};

function addNum(arr) {
    let sum = arr.reduce((acc, el) => {
        return acc + el;
    });
    return sum;
};

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56

//------------------------------------------------------------------------------
Function.prototype.curry = function(numArgs) {
    let arr = [];
    const that = this;
    console.log(`Line 30: ${that}`)
    return function _curriedFunc(arg) {
        arr.push(arg);
        console.log(`Line 33: ${that}`)

        if (arr.length === numArgs) {
            return that.apply(arr[0], arr.slice(1,arr.length));
        } else {
            return _curriedFunc;
        };
    };
};

let fourSum = function (arg1, arg2, arg3, arg4) {
    return arg1 + arg2 + arg3 + arg4;
}

let curriedFourSum = fourSum.curry(5);
console.log(curriedFourSum("hello")(1)(2)(1)(1));
