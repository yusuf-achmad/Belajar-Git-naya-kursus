
// Angka Genap

console.log("Angka Genap");
let number = -10;
for(;number <= 10; number+=2){
    console.log(number);
}

console.log(" ini juga Perulagan tapi While");
let Number = -10;
while(Number <= 10){
    console.log(Number);
    Number+=2;
}

// Angka Ganjil
console.log('Angka Ganjil');

let x = -10;
for(;x <= 10; x++){
    if (x % 2 == 0){
        continue;
    }
    else{
        console.log(x);
    }
}

console.log('Angka ganjil juga, tapi pakai while');

let y = -10
while(y <= 9){
    y++;
    if (y % 2 == 0){
        continue;
    }
    else{
        console.log(y);
    } 
    
    
}