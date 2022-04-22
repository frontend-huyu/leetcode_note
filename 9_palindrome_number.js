// submission1 RT: 330ms Memo: 51.3MB
// let isPalindrome = (x) => {
//   return reverse(x) === x
// };

// function reverse(n) {
//   n = n.toString()
//   let result = ''
//   for (let i = n.length - 1; i >= 0; i--) {
//     result += n[i]
//   }
//   return Number(result)
// }


// submission2 RT: 209ms Memo: 50.2MB
let isPalindrome = (x) => {
  x = x.toString()
  let j = 0
  for (let i = x.length - 1; i >= 0; i--) {
    if (x[i] !== x[j]) return false
    j++
  }
  return true
};