const findAccountNumber = input => {
  //This regex is looking for a number that starts with 2 and has only 7 more digits through to the end
  //This works because we parse the input to remove all non-alphanumeric characters
  //You could also use /(^2)(\d{7}$|\d{7}\W{1})/ that would allow for punctuation at the end
  const regex = /(^2)(\d{7}$)/;
  let strArr = input
    //Just in case, converting to a string
    .toString()
    //Replacing all non-alphanumeric characters with spaces
    .replace(/[\W]+/g, " ")
    //Splitting input on spaces
    .split(" ");

    //Using find will only return the first account number found
  let result = strArr.find(item => {
    //Removing leading and trailing whitespace
    item = item.trim();
    //Returning the item if the test passes
    return regex.test(item);
  });

  //If a result exists turn it into an integer and return it other return the not found message
  return result ? parseInt(result) : "Account number not found";
};

module.exports = findAccountNumber;
