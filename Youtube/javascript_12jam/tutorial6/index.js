const PI = 3.14159;
let radius;
let lingkaran;

// radius = window.prompt("Masukkan radius lingkaran");
// radius=Number(radius);

// lingkaran=2*pi*radius;

// console.log(lingkaran);

PI=10;

document.getElementById("btn").onclick=function(){
    radius= document.getElementById("myinput").value;
    radius=Number(radius);
    lingkaran=2*radius*PI;

    document.getElementById("myh3").textContent= lingkaran +" cm";
}