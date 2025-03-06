
// conforme "n" cresce, o numero de operações cresce tambem
// O(n) - runtime vai crescer conforme o N
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();

console.log('tempo gasto foi: ' + (t2 - t1) / 1000);


// 1 multiplicação, 1 soma e 1 divisão = 3 operações
// O(1);
function addUpTo2(n) {
    return n * (n + 1) / 2;
} 

let t3 = performance.now();
addUpTo2(10000000000);
let t4 = performance.now();
console.log('tempo gasto foi: ' + (t4 - t3) / 1000);


// here we have a nest loop, so n gros squared, that menas
// O(n^2)
function printAllPairs(n){
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            console.log(j, n);
        }
    }
}


// constant space, temos só duas variaveis, independente do tamanho do array, vai ser sempre duas variaveis total e oarray: O(1);
// ou seja, a alocação de memória DO algoritmo não vai aumentar baseado no INPUT
function sum(arr) {
    let total = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        total += element
    }

    return element;
}

// O(n)
// pois quando maior o array passado (input) maior vai ser a alocação de memória no novo array
function double(arr) {
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        newArr.push(element * 2);
    }
    return newArr;
}

let instructor = {
    firstName: "Rafael",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}



console.log(Object.hasOwn(instructor, "firstName"));
console.log(Object.values(instructor));
console.log(Object.entries(instructor));
console.log(Object.keys(instructor));



