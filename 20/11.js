function *flatten2 (arr) {
  for(let a of arr) {
    Array.isArray(a) ? yield* flatten2(a) : yield a
  }
}