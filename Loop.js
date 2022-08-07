// program to display text 5 times
// const n = 5;
// looping from i = 1 to 5
// for (let i = 1; i <= n; i++) {
//      console.log(`I love JavaScript.`);
// }

// using while
// let i = 5;
// while (i >= 0) {
// console.log(i);
// i = i - 1;
// }

// using for in loop
let Interviewee = {
     name: 'Sannil',
     age: 27,
     status: 'Single',
     Experience: 'Accenture'
}

for(key in Interviewee){
     console.log(`The ${key} of the Interviewee is ${Interviewee[key]}`)
}

// using for of
let family = ['Sannil','Neeta','Surekha','Laxman']

for(value of family){
     console.log('Hello ' + value + ' Welcome')
}

// using do while
let k = 10;
do{console.log(`${k} is less than `);
     k++}
while(k >15)

// nested loops
for(i=1;i<=5;i++){
     for(j=1;j<=10;j++){
         console.log(`${i} * ${j} = ${i*j}`)
     }
 console.log(`_____________`)
 }

//  using nested loops in array
let stockInventory = [['Item: Computer','Price: 40000 ','Inventory:25'],
['Item: Laptop','Price: 60000','Inventory:30'],
['Item: Headphone','Price: 5000','Inventory:70'],['Item: Monitor','Price: 20000','Inventory: 50'],
['Item: Printer','Price: 30000','Inventory: 3'],['Item: Router','Price: 5000','Inventory: 4']]

console.log(stockInventory.length)
for(i=0;i<stockInventory.length;i++){
    for(j=0;j<stockInventory[i].length;j++){
        console.log(stockInventory[i][j])
    }
    console.log('_____________________')
}
