function mixColor(color){
    let count = 0
    let temp;
    for(let i = 0; i < color.length; i++){
        for (let j = 0; j < color.length; j++) {
            if(color[i] !== color[j]){
                count++

                //unutk melihat warna yang dicampur
                temp = [color[i], color[j]]
                console.log(temp)
                
            }else{
                break
            }
        }
    }
    return count
}

console.log(mixColor(["Merah", "Putih", "Biru", "Kuning", "Hijau"]))