/*

  # Task

  Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.

  ## Arguments

    * operation: A Function, takes no arguments, returns no useful value.
    * num: the number of times to call `operation`

  ## Resources

    * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_function_scope
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype

  ## Hints

    * Don't overthink it, the code should be rather simple.
    * It's ok to use a loop in your implementation, bonus points if you use recursion instead.
    * You may notice some output. That is coming from the function we passed you.
    * You do not need to console.log anything.

*/

function repeat(operation, num) {
  var count = 0; 

  while (count <= num) {
    operation();
    count++;
  }

}
    
module.exports = repeat