import cipher from './cipher.js';

console.log(cipher);

window.addEventListener("load", play, true);

let btnOne = document.getElementById("btn-op1");

    btnOne.addEventListener("click", function () {
        selectOptionCifrado('cifrado');
    });

let btnOne2 = document.getElementById("btn-op2");

    btnOne2.addEventListener("click", function () {
        selectOptionCifrado('descifrado');
    });

  //SELECCIONAR ELEMENTOS
  function play() {
    document.getElementById("form-add-text-id").addEventListener("keyup", function () {
        this.value = this.value.toUpperCase();
    }, true);
    document.getElementById("form-add-text-id2").addEventListener("keyup", function () {
        this.value = this.value.toUpperCase();
    }, true);
    document.getElementById("go-cipher-btn").addEventListener("click", function () {
        let text1 = document.getElementById("form-add-text-id").value;
        let displace1 = document.getElementById("form-add-number-id1").value;
        document.getElementById("cipher-out-id").value = cipher.code(text1, displace1);
    }, true);
    document.getElementById("go-decipher-btn").addEventListener("click", function () {
        let text2 = document.getElementById("form-add-text-id2").value;
        let displace2 = document.getElementById("form-add-number-id2").value;
        document.getElementById("decipher-out-id").value = cipher.decode(text2, displace2);
    }, true);
}

//EVALÚA LA OPCIÓN SELECCIONADA
function selectOptionCifrado(key) {
    let sectionHome = document.getElementById("home-id");
    let optionCipher = document.getElementById("btn-op1");
    let sectionCipher = document.getElementById("page-cipher-id");
    let optionDecipher = document.getElementById("btn-op2");
    let sectionDecipher = document.getElementById("page-decipher-id");

    if (key === 'cifrado') {
        sectionHome.style.display = "none";
        sectionCipher.style.display = "block";
    }   else if (key === 'descifrado') {
        sectionHome.style.display = "none";
        sectionDecipher.style.display = "block";
    }
}