const DELAY_MIN = 0

console.log(process.env)

setTimeout(() => {
  process.exit(0)
}, DELAY_MIN * 60 * 1000)
