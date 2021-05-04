(input =>{
    console.log(input.trim().split('').map(n => n = 'x').join(''));
})(require('fs').readFileSync('/dev/stdin', 'utf8'))