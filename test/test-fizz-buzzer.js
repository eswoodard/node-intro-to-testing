const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function () {
    it('should raise error if args not numbers', function () {
        const badInputs = [
            ['a'],
            ['1'],
            [false]
        ];
        badInputs.forEach(function (input) {
            expect(function () {
                fizzBuzzer(input[0]);
            }).to.throw(Error);
        });
    });

    it('should be divisible by 3, 5, or 15', function() {
        const normalCases = [
            {num: 9, expected: 'fizz'},
            {num: 90, expected: 'fizz-buzz'},
            {num: 150, expected: 'fizz-buzz'},
            {num: 10, expected: 'buzz'},
            {num: 12, expected: 'fizz'},
            {num: 20, expected: 'buzz'}
        ];
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
        });
    });
});