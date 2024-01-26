function den(ong) {
    let success = false;

    if (!success) {
        success = true; 

        for (let i = 0; i < ong.length; i++) {
            for (let j = 0; j < ong.length - i -1 ; j++) {
                if (ong[j] < ong[j + 1]) {
                    
                    let temp = ong[j];
                    ong[j] = ong[j + 1];
                    ong[j + 1] = temp;
                    success = false; 
                }
            }
        }
    }
    let denUnik = [... new Set(ong)];
    return denUnik;
}

let ongInput = [7, 9, 9, 8, 4, 4, 5, 5, 6, 3, 1, 1, 2];
let ong = den (ongInput);
console.log(ong);