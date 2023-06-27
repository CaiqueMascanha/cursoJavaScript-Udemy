const arr = [1, 2, 3, 4, 5, 6, 7, 8]
let semPares = []

for( let i = 0; i <= 8; i++) {
    if(i % arr != 0) {
        semPares.push(arr)
    }
}

console.log(semPares)