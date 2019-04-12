/**
 * 斐波那契数列
 * 1 1 2 3 5 8 13 21 34 ...
 * @param x 
 */
export function f(x: i32): i32 {
  if (x === 1 || x === 2) {
      return 1;
  }
  return f(x - 1) + f(x - 2)
}
export function f2(x: i32): i32 {
  if (x === 1 || x === 2) {
    return 1;
  }
  let a = 1
  let b = 1
  for(let i = 3;i<=x;i++){
    let temp = b
    b = a+b
    a = temp
  }
  return b
}