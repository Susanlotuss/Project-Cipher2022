const cipher = {
    code,
    decode
  };


  //FUNCIÓN DE CIFRADO
function code (text1, displace1) {
    let result1 = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    displace1 = (displace1 % 26 + 26) % 26;

    if (text1) {
        for (let i = 0; i < text1.length; i++) {
            if (letters.indexOf(text1[i])!=-1) {
                let pos = ((letters.indexOf(text1[i]) + displace1) % 26);
                result1 += letters [pos];
            }
            else
                result1 += text1[i];
        }
    }
    return result1;
}

//FUNCIÓN DE DESCIFRADO
function decode (text2, displace2) {
    let result2 = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    displace2 = (displace2 % 26 - 26) % 26;

    if (text2) {
        for (let i = 0; i < text2.length; i++) {
            if (letters.indexOf(text2[i])!=-1) {
                let pos = ((letters.indexOf(text2[i]) - displace2) % 26);
                result2 += letters [pos];
            }
            else result2 += text2[i];
        }
    }
    return result2;
}


export default cipher;