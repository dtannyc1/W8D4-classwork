
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
    return function _curriedFunc(arg) {
        arr.push(arg);

        if (arr.length === numArgs) {
            return that.apply(null, arr);
        } else {
            return _curriedFunc;
        };
    };
};

let fourSum = function (arg1, arg2, arg3, arg4) {
    return arg1 + arg2 + arg3 + arg4;
}

let curriedFourSum = fourSum.curry(4);
console.log(curriedFourSum(1)(2)(1)(1));
