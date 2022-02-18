/* дано три числа a, b и c (это коэф квадратного уравнения) найти корни...*/

let a = prompt ("Введите число")
let b = prompt ("Введите число")
let c = prompt ("Введите число")

let d = (b * b) - 4 * a * c

if (d < 0){
  alert ("Решений нет")
}else {
  let x1 = (-b + Math.sqrt(d))/(2 * a)
  let x2 = (-b - Math.sqrt(d))/(2 * a)
  alert(x1 + " " + x2)
}
