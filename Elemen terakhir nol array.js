function den(ong){
    let success = false;

    if (!success) {
        success = true;

        for (let i = 0; i < ong.length; i++){
            for (let j = 1; j < ong.length - i - 1; j++){
                if (ong[j] < ong[j - 1]){

                    let temp = ong[j];
                    ong[j] = ong[j-1];
                    ong[j - 1] = temp;
                    success= false;
                }
            }
        }
        if (ong.length > 0){
        ong[ong.length - 1] = 0;
        }
    }
}

let ong = [7, 2, 8, 4, 5, 6, 3, 1, 9];
den(ong);
console.log(ong);