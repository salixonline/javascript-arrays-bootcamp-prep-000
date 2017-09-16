var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}
/*
function destructivelyAddElementToBeginningOfArray(array, element) {
  // var temp = array.unshift(element);
  return array.unshift(element);

  // var temp = [element, ...array];
  // return temp;
}
*/
function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

/*
function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}
*/
