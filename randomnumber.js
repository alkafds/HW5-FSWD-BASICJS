// Membuat array random 1-100
let array = [];
for (let index = 0; index < 100; index++) {
  let nomorRandom = Math.floor(Math.random() * 50);
  array.push(nomorRandom);
}

// Pecah array jadi index genap dan ganjil
let evenArray = [];
let oddArray = [];
for (let index = 0; index < array.length; index++) {
  if (index % 2 === 0) {
    evenArray.push(array[index]);
  } else {
    oddArray.push(array[index]);
  }
}

// Cari nilai min, max, total, avg, rata-rata
let evenMin = evenArray[0];
let evenMax = evenArray[0];
let evenTotal = 0;
let evenAverage = 0;
for (let index = 0; index < evenArray.length; index++) {
  if (evenArray[index] < evenMin) {
    evenMin = evenArray[index];
  }
  if (evenArray[index] > evenMax) {
    evenMax = evenArray[index];
  }
  evenTotal += evenArray[index];
}
evenAverage = evenTotal / evenArray.length;

let oddMin = oddArray[0];
let oddMax = oddArray[0];
let oddTotal = 0;
let oddAverage = 0;
for (let index = 0; index < oddArray.length; index++) {
  if (oddArray[index] < oddMin) {
    oddMin = oddArray[index];
  }
  if (oddArray[index] > oddMax) {
    oddMax = oddArray[index];
  }
  oddTotal += oddArray[index];
}
oddAverage = oddTotal / oddArray.length;

// Perbandingan kedua array
let compareHasil = [];
if (evenMin > oddMin) {
  compareHasil.push("Min lebih besar pada array ganjil");
} else if (evenMin < oddMin) {
  compareHasil.push("Min lebih besar pada array genap");
} else {
  compareHasil.push("Min memiliki nilai yang sama pada array genap dan ganjil");
}

if (evenMax > oddMax) {
  compareHasil.push("Max lebih besar pada array genap");
} else if (evenMax < oddMax) {
  compareHasil.push("Max lebih besar pada array ganjil");
} else {
  compareHasil.push("Max memiliki nilai yang sama pada array genap dan ganjil");
}

if (evenTotal > oddTotal) {
  compareHasil.push("Total genap lebih besar pada array ganjil");
} else if (evenTotal < oddTotal) {
  compareHasil.push("Total ganjil lebih besar pada array genap");
} else {
  compareHasil.push("Total ganjil genap sama nilainya");
}

if (evenAverage > oddAverage) {
  compareHasil.push("Rata-rata array genap lebih besar dari array ganjil");
} else if (evenAverage < oddAverage) {
  compareHasil.push("Rata-rata array ganjil lebih besar dari array genap");
} else {
  compareHasil.push("Rata-rata array ganjil genap sama");
}

// Output hasil
console.log("Array random: ", array);
console.log("Array genap: ", evenArray);
console.log("Array ganjil: ", oddArray);
console.log("Perbandingan", compareHasil)

