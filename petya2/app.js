let i = 0
let a = parseInt(prompt("Введите кол-во рублей")) //=)00
let n = parseInt(prompt("Кол-во месяцев"))
while  (i < n) {
 i++
 a+= a / 100 * 5
}
 alert(a)
