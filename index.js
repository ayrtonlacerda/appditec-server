const app = require('./api')

app.listen(3333, () => {
  console.log(`\n\nš Server Start š\n\n`)
})

module.exports = app