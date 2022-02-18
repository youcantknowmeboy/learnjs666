/*Дано четыре числа a, b, c, d - вывести наибольшее из них. */

let a = 1
let b = 2
let c = 3
let d = 4

if (a>b){
  if (a>c){
    if (a>d){
      alert(a)
    }
  }
}

if (b>a){
  if (b>c){
    if (b>d){
      alert (b)
    }
  }
}

if (c>a){
  if (c>b){
    if(c>d){
      alert (c)
    }
  }
}

if (d>a){
  if (d>b){
    if (d>c){
      alert (d)
    }
  }
}
