// 1. Buat 2 buah looping menggunakan for loop!
console.log(`==== For Loop ====`);
for (let index = 1; index <= 5; index++) {
  let isEven = false;
  if (index % 2 == 0) {
    isEven = true;
  }
  console.log(
    `Bilangan ${index} merupakan bilangan ${isEven ? 'genap' : 'ganjil'}.`
  );
}

for (let index = 1; index <= 5; index++) {
  let segitigaBintang = '';
  for (let star = 1; star <= index; star++) {
    segitigaBintang += '*';
  }
  console.log(segitigaBintang);
}

// ===================================================

// 2. Buat 2 buah looping menggunakan while loop!
console.log(`\n==== While Loop ====`);
let indexLoop = 1;
while (indexLoop <= 5) {
  let isEven = false;
  if (indexLoop % 2 == 0) {
    isEven = true;
  }
  console.log(
    `Bilangan ${indexLoop} merupakan bilangan ${isEven ? 'genap' : 'ganjil'}.`
  );
  indexLoop++;
}

indexLoop = 1;
while (indexLoop <= 5) {
  let segitigaBintang = '';
  let star = 1;
  while (star <= indexLoop) {
    segitigaBintang += '*';
    star++;
  }
  console.log(segitigaBintang);
  indexLoop++;
}

// ===================================================

// 3. Buat 2 buah looping menggunakan do-while loop!
indexLoop = 1;
console.log(`\n==== Do While Loop ====`);
do {
  let isEven = false;
  if (indexLoop % 2 == 0) {
    isEven = true;
  }
  console.log(
    `Bilangan ${indexLoop} merupakan bilangan ${isEven ? 'genap' : 'ganjil'}.`
  );
  indexLoop++;
} while (indexLoop <= 5);
indexLoop = 1;
do {
  let segitigaBintang = '';
  let star = 1;
  do {
    segitigaBintang += '*';
    star++;
  } while (star <= indexLoop);
  console.log(segitigaBintang);
  indexLoop++;
} while (indexLoop <= 5);

// ===================================================

// 4. Buat 1 buah looping untuk mengeluarkan nilai dari sebuah array!
console.log(`\n==== Looping through array ====`);
const valorantAgents = ['Phoenix', 'Sova', 'Harbor', 'Gekko', 'Jett'];
for (let index = 0; index < valorantAgents.length; index++) {
  console.log(valorantAgents[index]);
}
