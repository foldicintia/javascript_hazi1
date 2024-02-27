import kutyaLista from "./feladat.js";

function kutyanevsuly(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(`${lista[i].nev} súlya: ${lista[i].suly} kg`);
    }
    }

kutyanevsuly(kutyaLista);

function atlagsuly(lista) {
    let ossz = 0;
    for (let i = 0; i < lista.length; i++) {
        ossz += lista[i].suly;
    }
    let atlag = ossz / lista.length; 
    return atlag;
}

let atlag = atlagsuly(kutyaLista);
console.log(`A kutyák átlagos súlya: ${atlag} kg.`);
