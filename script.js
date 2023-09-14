var panjangInput = document.querySelector(".panjang");
var lebarInput = document.querySelector(".lebar");
var calculateButton = document.querySelector(".calculate");
var panjang, panjang, lebar;

function myfunction() {
    panjang = panjangInput.value;
    lebar = lebarInput.value;
    panjang = panjang*lebar;
    alert("hasilnya adalah :" + panjang);
}