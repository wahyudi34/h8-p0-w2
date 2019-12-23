//1. Melakukan Looping Menggunakan While

var pertama = 2
var kedua = 20

console.log('LOOPPING PERTAMA')
while (pertama <= 20) {
    console.log(pertama + ' I love coding')
    pertama += 2;
}

console.log('LOOPING KEDUA')
while (kedua >= 2) {
    console.log(kedua + ' I will become fullstack developer')
    kedua -= 2;
}
third


//2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA')
for(var i=0; i<=20; i++) {
    console.log([i] + ' I love coding')
}

for(var i=20; i>0; i--) {
    console.log([i] + ' I will become fullstack developer')
}


//3. Angka Ganjil dan Genap 

for(var i=0; i<=100; i++) {
    if([i]%2 === 0) {
        console.log('counter sekarang = ' + [i])
        console.log('Genap')
    } else {
        console.log('counter sekarang = ' + [i])
        console.log('Ganjil')
    }
}


var counter1 = 1
var counter2 = 1
var counter3 = 1


for(var i=0; i<100; i++) {
    if(counter1%3 === 0) {
        console.log(counter1 + ' KELIPATAN ' + 3)
    } else {
        console.log("''")
    }
    counter1+=2;
}

for(var i=0; i<100; i++) {
    if(counter2%6 === 0) {
        console.log(counter2 + ' KELIPATAN ' + 6)
    } else {
        console.log("''")
    }
    counter2+=5;
}

for(var i=0; i<100; i++) {
    if(counter3%10 === 0) {
        console.log(counter3 + ' KELIPATAN ' + 10)
    } else {
        console.log("''")
    }
    counter3+=9;
}