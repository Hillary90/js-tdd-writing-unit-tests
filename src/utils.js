// Your tests here
export function isPalindrome(word) {

    word = word.toLowerCase();
    
    // Remove spaces using regex
    word = word.replace(/\s/g, '');

    return word === word.split('').reverse().join('');
  }