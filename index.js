function mixColor(color) {
    let count = 0;
    let temp;
    for (let i = 0; i < color.length; i++) {
        for (let j = 0; j < color.length; j++) {
            if (color[i] !== color[j]) {
                count++;

                //unutk melihat warna yang dicampur
                temp = [color[i], color[j]];
                console.log(temp);
            } else {
                break;
            }
        }
    }
    return count;
}

console.log(mixColor(["Merah", "Putih", "Biru", "Kuning", "Hijau"]));


// alternatif lain kalau dihitung menggunakan angka
function color(manyColor, mix) {
    let num = 1;
    for (let i = 1; i <= manyColor; i++) {
        num *= i;
    }

    let newNum = manyColor - mix;
    let num2 = 1;
    for (let i = 1; i <= newNum; i++) {
        num2 *= i;
    }

    let num3 = 1;
    for (let i = 1; i <= mix; i++) {
        num3 *= i
    }
 
    return num / (num2 * num3)
}

console.log(color(5, 2));
