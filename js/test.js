/* for (let i = 2; i <= 10; i+2) {
    console.log(i);
} */

/* for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
} */

/* let i = 1;
while (i <= 10) {
    i++;
    if (i % 2 === 1) {
        continue;
    } else {
        console.log(i);
    }
} */

/* const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers; */


/* const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

    for (let i = 0; i < arr.length; i++){
    result[i] = arr[i];
}

    console.log(result); */



/* const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
        data[i] = data[i] * 2;
    } else if (typeof(data[i]) === 'string') {
        data[i] = `${data[i]} - done`;
    }
}

console.log(data); */


/* var one = 'Hello, ';
var two = 'how are you?';
var joined = one + two;
console.log(joined); */


/*     const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - 1]
    }

    console.log(result); */


  /*   const lines = 5;
    let result = '';
    
    for (let i = 0; i <= lines; i++) {
        for (let j = 0; j < lines - i; j++) {
            result += " ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            result += "*";
        }
        result += "\n";
    }
    
    console.log(result) */


/* const usdCurr = 28;
const eurCurr = 38;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, eurCurr); */


/* function sayHello(a, hello) {
    hello = "Привет, "
    return hello + a + "!"
}

sayHello("Anton"); */


/* function returnNeighboringNumbers(i) {
    return [i - 1, i, i + 1]

}
console.log(returnNeighboringNumbers(5)); */



/* function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

console.log(getMathResult(5, 4)); */

//
var str = "test";
console.log(str.toUpperCase());
console.log(str);
//
const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));
//
const logg = "Hello world";
console.log(logg.slice(6, 11));//или только первый аргумент
console.log(logg.substring(6, 11));//аналог предидущей команды, только не поддерживает отрицательные значения
console.log(logg.substr(6, 11));// второй аргумент указывает на длину строки которую вырезаем
//
const num = 12.5;
console.log(Math.round(num));// округление числа
//
const test = "12.9px";
console.log(parseInt(test));// превращает строку в числовой тип данных, обрезая запятую
console.log(parseFloat(test));// превращает строку в число, не обрезая запятую