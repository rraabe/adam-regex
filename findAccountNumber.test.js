const findAccountNumber = require("./findAccountNumber");

describe("Test", () => {
  test("Just an account number", () => {
    const result = findAccountNumber(23456789);
    expect(result).toEqual(23456789);
  });
  test("Account number as string", () => {
    const result = findAccountNumber("23456789");
    expect(result).toEqual(23456789);
  });
  test("Doesn't start with 2, right length", () => {
    const result = findAccountNumber(32456789);
    expect(result).toEqual("Account number not found");
  });
  test("Doesn't start with 2, right length, string", () => {
    const result = findAccountNumber("32456789");
    expect(result).toEqual("Account number not found");
  });
  test("Too short", () => {
    const result = findAccountNumber(2456789);
    expect(result).toEqual("Account number not found");
  });
  test("Too long", () => {
    const result = findAccountNumber(245678119);
    expect(result).toEqual("Account number not found");
  });
  test("Account number in string with punctuation", () => {
    const result = findAccountNumber("Your account number is #23456789.");
    expect(result).toEqual(23456789);
  });
  test("Non-account number in string", () => {
    const result = findAccountNumber("Your account number is 32456789");
    expect(result).toEqual("Account number not found");
  });
  test("Account number in middle of string", () => {
    const result = findAccountNumber("Your 23456789 number is ");
    expect(result).toEqual(23456789);
  });
  test("Newline character at the end of input", () => {
    const result = findAccountNumber("Your account number is 23456789\n");
    expect(result).toEqual(23456789);
  });
  test("Newline character with account number in the middle", () => {
    const result = findAccountNumber("Your account number is 23456789.\n Have a nice day!");
    expect(result).toEqual(23456789);
  });
 
});
