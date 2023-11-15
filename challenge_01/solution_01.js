import { message } from "./message_01";

let array = words.toLowerCase().split(" ");

function countWords(array) {
  let listaCount = {};
  for (let i = 0; i < array.length; i++) {
    let elemento = array[i];
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  }
  let stringFinal = "";
  let llaves = Object.keys(listaCount);
  for (let i = 0; i < llaves.length; i++) {
    let llave = llaves[i];
    stringFinal += `${llave}${listaCount[llave]}`;
  }

  return stringFinal;
}

countWords(array);
