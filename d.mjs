import test from "./test.mjs";

/*
    Challenge: Implement the `guessNumber` function.

    The function `guessNumber` takes two parameters:
    1. `target` (an integer) - the number to guess.
    2. `guess` (an integer) - the player's guess.

    The function should:
    - Return "Too low" if the guess is less than the target.
    - Return "Too high" if the guess is greater than the target.
    - Return "Correct!" if the guess matches the target.
    - Return null if either input is not a valid integer.

    Your task:
    1. Complete the tests below to verify the functionality.
    2. Implement the `guessNumber` function so it passes all the tests.

    
*/

//#region function -----------------------------------------------------------------

function guessNumber(target, guess) {
    if (typeof target !== "number" || !Number.isInteger(target) || typeof guess !== "number" || !Number.isInteger(guess)){
        return null;
    }
    if (guess < target){
        return "Too low";
    } else if (guess > target){
        return "Too high";
    } else {
        return "Correct!";
    }
}

//#endregion

//#region Tests --------------------------------------------------------------------
const tests = test("GuessNumber function");

// Basic cases
tests.isEqual(guessNumber(10, 5), "Too low", "If target is 10 and guess is 5, return 'Too low'");
tests.isEqual(guessNumber(10, 15), "Too high", "If target is 10 and guess is 15, return 'Too high'");
tests.isEqual(guessNumber(10, 10), "Correct!", "If target is 10 and guess is 10, return 'Correct!'");

// Invalid inputs
tests.isEqual(guessNumber("11", 14), null, "String target input should return null");
tests.isEqual(guessNumber(11, "14"), null, "String guess input should return null");
tests.isEqual(guessNumber(11.5, 14), null, "Non-integer target input should return null");
tests.isEqual(guessNumber(11, 14.5), null, "Non-integer guess input should return null");
tests.isEqual(guessNumber(null, 11), null, "Null target input should return null");
tests.isEqual(guessNumber(11, undefined), null, "Undefined guess input should return null");

// Edge cases
tests.isEqual(guessNumber(11, 11), "Correct!", "For n = 0 and guess 0, should return 'Correct!'");
tests.isEqual(guessNumber(-11, -14), "Too low", "For target -5 and guess -10, should return 'Too low'");
tests.isEqual(guessNumber(-14, -11), "Too high", "For target -10 and guess -5, should return 'Too high'");

//#endregion
