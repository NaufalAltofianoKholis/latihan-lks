// let nama = "fian";

// do{
//     nama = window.prompt("Masukkan nama anda");
// }
// while(nama === "" || nama === null)

// console.log(`halo ${nama}`);

// let login = false;
// let username;
// let password;

// while(!login){
//     username = window.prompt("masukkan nama kamu");
//     password = window.prompt("masukkan password kamu");

//     if(username === "namasaya" && password === "passwordsaya"){
//         login=true;
//         console.log("kamu telah login");
//     }

//     else{
//         console.log("invalid! tolong diisi");
//     }
// }

let login = true;
let username;
let password;

do{
    username = window.prompt("masukkan nama kamu");
    password = window.prompt("masukkan password kamu");

    if(username === "namasaya" && password === "passwordsaya"){
        login=true;
        console.log("kamu telah login");
    }

    else{
        console.log("invalid! tolong diisi");
    }
}
while(!login)

