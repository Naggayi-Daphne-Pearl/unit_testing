function factorialize(num) {
// validating our input. 
  // If the number is less than 0, reject it.
  if (num < 0) 
        return -1;
    
  // If the number is 0, its factorial is 1.
  else if (num == 0) 
      return 1;
    
  // Otherwise, call the recursive procedure again
    else {
        return (num * factorialize(num - 1));
    }
}   

module.exports = factorialize;

// references
// https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/#:~:text=function%20factorialize(num)%20%7B%20%2F%2F%20If%20num%20%3D%200%20OR,num%20*%3D%20i%3B%20%2F*%20num