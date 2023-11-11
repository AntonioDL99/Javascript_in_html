"use strict"; // Modalità strict abilitata

// Dimostrazione dei tipi di dati primitivi e di Object
const exampleNull = null;
let exampleUndefined;
const exampleBoolean = true;
const exampleNumber = 42;
const exampleBigInt = BigInt(9007199254740991);
const exampleString = "Hello, ECMAScript!";
const exampleSymbol = Symbol("unique");
const exampleObject = { key: "value" };

// utilizzo di typeof per identificare i tipi
console.log(`Tipo di exampleNull: ${typeof exampleNull}`); // "object"
console.log(`Tipo di exampleUndefined: ${typeof exampleUndefined}`); // "undefined"
console.log(`Tipo di exampleBoolean: ${typeof exampleBoolean}`); // "boolean"
console.log(`Tipo di exampleNumber: ${typeof exampleNumber}`); // "number"
console.log(`Tipo di exampleBigInt: ${typeof exampleBigInt}`); // "bigint"
console.log(`Tipo di exampleString: ${typeof exampleString}`); // "string"
console.log(`Tipo di exampleSymbol: ${typeof exampleSymbol}`); // "symbol"
console.log(`Tipo di exampleObject: ${typeof exampleObject}`); // "object"

// Inizialiazzione di una variabile a null
let expectedObject = null;

// Verifica se la variabile 'expectedObject' è null
if (expectedObject != null) {
    console.log("expectedObject non è null");
} else {
    console.log("expectedObject è null");
}

// Confronto tra null e undefined
console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false

// Dichiarazione di variabili Boolean
let isSuccess = true;
let isFailuer = false;

// Uso di variabili Boolean in controlli condizionali
if (isSuccess) {
    console.log("isSuccess è true");
} else {
    console.log("isSuccess è false");
}

// Conversione di altri tipi in Boolean
let message = "questo è un messaggio";
let isEmpty = message.length === 0;
let messageBoolean = Boolean(message);

console.log("isEmpty:", isEmpty); // false
console.log("messageBoolean:", messageBoolean); // true

// Uso pratico dei Boolean in condizioni
let itemCount = 5;
if (itemCount) {
    console.log("Ci sono elementi");
} else {
    console.log("Non ci sono elementi");
}

// Altri sempi con valori truthy e falsy
let undefinedVariable;
let nullvariable = null;

if (undefinedVariable) {
    console.log("questa istruzione non verrà eseguita");
}

if (nullVariable) {
    console.log("Questa istruzione non verrà eseguita");
}

// Esempi di numeri in diversi formati
let decimalNum = 42; // Numero decimale
let binaryNum = 0b101010; // Numero binario
let octalNum = 0o52; // Numero ottale
let hexNum = 0x2a; // Numero esadecimale;

console.log("Decimal:", decimalNum);  // 42
console.log("Binary:", binaryNum);    // 42
console.log("Octal:", octalNum);      // 42
console.log("Hexadecimal:", hexNum);  // 42

// Conversione tra sistemi numerici
console.log("Binario a Decimale:", parseInt('101010', 2));  // 42
console.log("Ottale a Decimale:", parseInt('52', 8));       // 42
console.log("Esadecimale a Decimale:", parseInt('2A', 16)); // 42

// Utilizzo di null in controlli condizionali
let optionalObject = null;

if (optionalObject) {
    console.log("optionalObject è true");
} else {
    console.log("optionalObject è false");
}

// Esempi di valori in virgola mobile
let floatNum1 = 1.1;
let floatNum2 = 0.1;
let floatNum3 = .1; // valido, ma non consigliato

console.log("Numero in virgola mobile 1:", floatNum1);
console.log("Numero in virgola mobile 2:", floatNum2);
console.log("Numero in virgola mobile 3 (non consigliato):", floatNum3);

// Utilizzo della notazione scientifica
let largeNumber = 3.125e7; // 31250000
let smallNumber = 3.125e-7; // 0.0000003125

// Gestiomne degli errori di arrotondamento
let sum = 0.1 + 0.2;
console.log("Somma di 0.1 e 0.2 (prima dell'arrotondamento):", sum); // 0.30000000000000004
console.log("Somma di 0.1 e 0.2 (arrotondato):", sum.toFixed(2)); // 0.30

// Attenzione ai confronti con valori in virgola mobile
if (sum.toFixed(2) == "0.30") {
    console.log("La somma è 0.30 (dopo arrotondamento)"); // Questa istruzione verrà eseguita
} else {
    console.log("La somma non è 0.30"); // Questa istruzione non verrà eseguita
}

// Esempi di separatori numerici
let oneMillion = 1_000_000;
let binaryNumSep = 0b0100_0000;
let floatNum = 1_000.000_001;

console.log("Numero con separatori (1 milione):", oneMillion); // 1000000
console.log("Numero binario con separatori:", binaryNum); // 64
console.log("Numero in virgola mobile con separatori:", floatNum); // 1000.000001

// Esempi di massimi e minimi numerici rappresentabili
console.log("Numero massimo rappresentabiele: ", Number.MAX_VALUE); // 1.7976931348623157e+308
console.log("Numero minimo rappresentabile: ", Number.MIN_VALUE); // 5e-324

// Esempi di infinity
let tooLargeNumber = Number.MAX_VALUE * 2;
console.log("Numero troppo grande:", tooLargeNumber); // Infinity
console.log("è finito (toolArgeNumber)?", isFinite(tooLargeNumber)); // false

let tooSmallNumber = Number.MIN_VALUE / 2;
console.log("Numero troppo piccolo:", tooSmallNumber); // 0
console.log("è finito (tooSmallNumber)?", isFinite(tooSmallNumber)); // true

// esempi di Negative Infinity
let tooNegativeNumber = -Number.MAX_VALUE * 2;
console.log("Numero troppo negativo:", tooNegativeNumber); // -Infinity
console.log("è finito (tooNegativeNumber)?", isFinite(tooNegativeNumber)); // false

// Esempi di operazioni che producono NaN
let sqrtOfNegative = Math.sqrt(-1); // Calcolo della radice quadrata di un numero negativo
console.log("Radice quadrata di -1:", sqrtOfNegative); // NaN

let divisionByString = 1 / "stringa"; // Divisione per una stringa
console.log("Divisione per una stringa:", divisionByString); // NaN

// Uso di isNaN per verificare se un valore è NaN
console.log("sqrtOfNegative è NaN", isNaN(sqrtOfNegative)); // true
console.log("divisionByString è NaN", isNaN(divisionByString)); // true
console.log("1 è NaN", isNaN(1)); // false

// Esempi di conversione con Number()
console.log(Number("123")); // 123
console.log(Number("")); // 0
console.log(Number("123ABC")) // NaN
console.log(Number(true)) // 1

// Esempi di conversione con parseInt()
console.log(parseInt("100px")) // 100
console.log(parseInt("12.34")) // 12
console.log(parseInt("ABC")) // NaN

// Esempi di conversione con parseFloat()
console.log(parseFloat("123.45#")) // 123.45
console.log(parseFloat("12.34")) // 12.34
console.log(parseFloat("ABC")) // NaN

// Dichiarazione delle variabili
let firstNumber = 10;
const MAX_LIMIT = 100;

// Esempio di variabile globale
var globalVariable = "Sono globale";

// Funzione per verificare se un numero è minore del limite massimo
function isUnderMaxLimit(number) {
    var localVariable = "Sono locale"; // Esempio di variabile globale
    console.log(globalVariable); // Accesso alla variabile globale

    // Blocco con let
    if (true) {
        let blockScopedVariable = "Visibile solo in questo blocco";
        console.log(blockScopedVariable); // Visibile solo in questo blocco
    }

    // console.log(blockScopedVariable); // Errore: blockScopedVariable is not defined

    return number < MAX_LIMIT;
}

// Esempio di hoisting con var
function demonstrateHoisting() {
    console.log("Hoisting: " + hoistedVariable); // undefined
    var hoistedVariable = "Sono stata sollevata";
    console.log("Hoisting: " + hoistedVariable); // Sono stata sollevata
}

// Uso di un blocco di controllo con if
if (isUnderMaxLimit(firstNumber)) {
    console.log("${firstNumber} è minore di ${MAX_LIMIT}");
} else {
    console.log("${firstNumber} è maggiore di ${MAX_LIMIT}");
}

// Esempio di 'var' in un ciclo for
function demonstrateVarInLoop() {
    for (var i = 0; i < 3; i++) {
        console.log("Dentro il ciclo con var:" + i);
    }
    console.log("Fuori dal ciclo con var:" + i); // Stampa 3
}

// Esempio di 'let' in un ciclo for
function demonstrateLetInLoop() {
    for (let i = 0; i < 3; i++) {
        console.log("Dentro il ciclo con let:" + i);
    }
    // console.log("Fuori dal ciclo con let:" + i); // Errore: i is not defined
}

// Esempio di setTimeout in u  ciclo for con 'var'
function demonstrateVarWithSetTimeout() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log("SetTimeout con var: " + i), 0);
    }
    // Tutte le chiamate a setTimeout stampano 3
}

// Esempio di setTimeout in u  ciclo for con 'let'
function demonstrateLetWithSetTimeout() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log("SetTimeout con let: " + i), 0);
    }
    // Ogni chimata a setTimeout stamperà il valore corrispopndente di i
}
// Chiamate alle funzioni di dimostrazione
demonstrateVarInForLoop();
demonstrateLetInForLoop();
demonstrateVarWithSetTimeout();
demonstrateLetWithSetTimeout();
demonstrateHoisting(); // Hoisting: undefined Hoisting: Sono stata sollevata