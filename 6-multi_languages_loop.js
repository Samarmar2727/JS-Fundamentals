
const langs = ["C is fun", "Python is cool", "JavaScript is amazing" ]
let result = '';

for (let i = 0; i < langs.length; i++) {
  result += langs[i] + '\n';
}

console.log(result.trim());
