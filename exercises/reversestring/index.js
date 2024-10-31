// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // return str.split('').reverse().join('');

    let reversed = '';

    for (let char of str) {
        reversed = char + reversed;
    }

        // for (var i=str.length; i > 0; i--){
    //     let letter = arr.pop();
    //     reversed = reversed.push(letter)
    // }
    
    return reversed;

    
}

module.exports = reverse;
