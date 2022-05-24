function factorialize(num) {

    // any number less than 1 or negative should return 1; 
    if (num <= 0 || num === 1)  // Validating input
    return 1;
    
    // 
    for (var i = num - 1; i >= 1; i--) {
        num = num*i;              // Multiplying the number by the previous number
        }
        return num;
    
}

module.exports = factorialize;

// references
// https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/#:~:text=function%20factorialize(num)%20%7B%20%2F%2F%20If%20num%20%3D%200%20OR,num%20*%3D%20i%3B%20%2F*%20num