import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
function formatName(name) {
    if (typeof name !== "string") return null;
    const trimmed = name.trim();
    if (trimmed === "") return "";
    if (!/^[A-Za-z\s]+$/.test(trimmed)) return null;
    const words = trimmed.split(" ").filter(word => word !== "");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    return capitalizedWords.join(" ");
}
//#endregion

//#region Tests --------------------------------------------------------------------
const tests = test("FormatName function");

tests.isEqual(formatName(14), null, "Non-string input (number) should return null");
tests.isEqual(formatName({}), null, "Non-string input (object) should return null");

tests.isEqual(formatName("   "), "", "Input with only spaces should return an empty string");

tests.isEqual(formatName("stan"), "Stan", 'Input "stan" should return "Stan"');

tests.isEqual(formatName("  stan the man "), "Stan The Man", 'Input "  stan the man " should return "Stan The Man"');

tests.isEqual(formatName("stan   lenthe"), "Stan Lenthe", 'Input "stan   lenthe" should return "Stan Lenthe"');

tests.isEqual(formatName("sTAN tHe MaN"), "Stan The Man", 'Input "sTAN tHe MaN" should return "Stan The Man"');

tests.isEqual(formatName("stan@the@man"), null, 'Input "stan@the@man" should return null');
tests.isEqual(formatName("stan#the#man"), null, 'Input "stan#the#man" should return null');
//#endregion