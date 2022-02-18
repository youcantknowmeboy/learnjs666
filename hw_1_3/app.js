/* Даны три точки. Найти площадь треугольника которые они задают (указание: формула Герона) . Если точки лежат на одной прямой вывести сообщение что это не треугольник. */

let x1, y1
x1 = prompt ("Введите x1")
y1 = prompt ("Введите y1")

let x2, y2

x2 = prompt ("Введите x2")
y2 = prompt ("Введите y2")

let x3, y3
x3 = prompt ("Введите x3")
y3 = prompt ("Введите y3")

let a, b, c
a = Math.sqrt ((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))
b = Math.sqrt ((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2))
c = Math.sqrt((x3 - x1) * (x3 - x1) + (y3 - y1) * (y3 - y1))

let p

p = (a + b +c) / 2

let s

s = Math.sqrt (p * (p - a) * (p - b) * (p - c))
alert (s)
