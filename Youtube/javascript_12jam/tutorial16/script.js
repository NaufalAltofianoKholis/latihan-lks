let nama = window.prompt("Masukkan nama anda");

//------- Method tanpa chaining -------

// nama = nama.trim();
// let kata = nama.charAt(0);
// kata = kata.toUpperCase();
 
// let ekstra = nama.slice(1);
// ekstra = ekstra.toLowerCase();
// nama = kata+ekstra;

// console.log(nama);

//------- Method dengan chaining -------

nama = nama.trim().charAt(0).toUpperCase() + nama.trim().slice(1).toLowerCase();

console.log(nama);