//doWhile

export function se_dowhile(n){

    do {
        console.log("Do While:", n);
        n++;
    } while (n < 3);
}

//For

export function se_for(){

    for (let k = 0; k < 3; k++) {
    console.log("For:", k);
}
}

//ForEach 
export function se_foreach(num){

num.forEach(function(num) {
    console.log("ForEach:", num);
});
}

//Map
export function se_map(num2) {
    return num2.map(function(num2) {
        return num2 * 2;
    });

    console.log("Map (dobro);", dobro);
}

//While 
 export function se_while(i){

    while (i < 3) {
    console.log("While:", i);
    i++;
}
}