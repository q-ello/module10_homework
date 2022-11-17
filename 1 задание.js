let a = prompt("Введите значение: ");
a++;
if (typeof a == "number" && !Number.isNaN(a)){
    if (a % 2 == 1) console.log("Число чётное")
    else console.log("Число нечётное")
}
else console.log("Упс, кажется, вы ошиблись");