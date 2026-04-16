// doWhile
export function se_dowhile(n) {
    let resultado = [];

    do {
        resultado.push(`Do While: ${n}`);
        n++;
    } while (n < 3);

    return resultado;
}

// For
export function se_for() {
    let resultado = [];

    for (let k = 0; k < 3; k++) {
        resultado.push(`For: ${k}`);
    }

    return resultado;
}

// ForEach
export function se_foreach(num) {
    let resultado = [];

    num.forEach(function(n) {
        resultado.push(`ForEach: ${n}`);
    });

    return resultado;
}

// Map
export function se_map(num2) {
    return num2.map(function(n) {
        return n * 2;
    });
}

// While
export function se_while(i) {
    let resultado = [];

    while (i < 3) {
        resultado.push(`While: ${i}`);
        i++;
    }

    return resultado;
}