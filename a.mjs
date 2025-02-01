import test from "./test.mjs";

/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinit number of parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
    It should return the product of the numbers, with the following constraints:

    1. If one or more of the parameters are not valid numbers, the function should return NaN (Not a Number).
    2. If either parameter is a string that can be converted to a number (e.g., "3"), it should be parsed into a number before multiplying.
    3. If either parameter is Infinity or -Infinity, return Infinity or -Infinity based on the rules of multiplication.
    4. Handle edge cases like multiplying by 0 and NaN appropriately.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `multiply` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
function multiply(...numbers){
    if (numbers.length === 0) return NaN;

    let product = 1;

    for (let number of numbers){
        if (typeof number === "string" && ! isNaN(number)){
            number = parseFloat(number);
        }
        if (typeof number !== "number" || isNaN(number)){
            return NaN;
        }
        product *= number;
    }
    return product;
}
//#endregion

//#region Tests --------------------------------------------------------------------
const tests = test("Multiply function");

tests.isEqual(multiply(2, 3), 6, "Multiplication of 2 and 3 should be 6");
tests.isEqual(multiply(5, 5, 2), 50, "Multiplication of 5, 5, and 2 should be 50");
tests.isEqual(multiply(1.5, 2), 3, "Multiplication of 1.5 and 2 should be 3");

tests.isEqual(multiply("2", 3), 6, 'Multiplication of "2" and 3 should be 6');
tests.isEqual(multiply("4", "5"), 20, 'Multiplication of "4" and "5" should be 20');

tests.isNotANumber(multiply("hello", 3), 'Multiplication of "hello" and 3 should return NaN');
tests.isNotANumber(multiply(2, undefined), "Multiplication of 2 and undefined should return NaN");
tests.isNotANumber(multiply(null, 3), "Multiplication of null and 3 should return NaN");
tests.isNotANumber(multiply(), "Multiplication with no arguments should return NaN");

tests.isEqual(multiply(0, 5), 0, "Multiplication of 0 and 5 should be 0");
tests.isEqual(multiply(1, Infinity), Infinity, "Multiplication of 1 and Infinity should be Infinity");
tests.isEqual(multiply(-1, Infinity), -Infinity, "Multiplication of -1 and Infinity should be -Infinity");
tests.isNotANumber(multiply(NaN, 5), "Multiplication of NaN and 5 should return NaN");
//#endregion