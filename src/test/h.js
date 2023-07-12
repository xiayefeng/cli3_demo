function fib (num) {
  const dp = new Array(num + 1);
  dp[0] = 0
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i <= num; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[num];
}


function fib2 (num, m = Object.create(null)) { //第一次使用的时候是1个参数 后续都是2个参数
  if (m[num]) return m[num];
  let res;
  if (num === 1 || num === 2) {
    return 1;
  }
  else {
    if (m[num]) {
      return m[num];
    }
    else
      return m[num] = fib2(num - 1, m) + fib2(num - 2, m);
  }
}


function fib3 (num) {
  fib.m = fib.m || Object.create(null);
  if (fib.m[num]) return fib.m[num];


  if (num === 1 || num === 2) {
    return 1;
  }
  else
    return fib.m[num] = fib(num - 1) + fib(num - 2);
}

// console.log(fib(100))
// console.log(fib2(100))
console.log(fib3(100))

const reg = /1b[01]|2b[01]{2}|3b[01]{3}|4b[01]{4}|5b[01]{5}|6b[01]{6}|7b[01]{7}|8b[01]{8}/