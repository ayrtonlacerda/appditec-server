const express = require('express')
const app = express()

// controllers
const user = require('./controller/user')
const vestigios = require('./controller/vestigios')
const pops = require('./controller/pops')

// app
// trigger

app.use(express.json());
app.get('/helloworld', async (req, res) => {
  return res.status(200).json({ m: 'Hello World' })
})
app.post('/auth/login', user.Login)
/* 
app.use((req, res, next) => {
  const { authorization } = req.headers
  if (authorization !== 'Bearer myToken') return res.status(401).json({ error: 'token invalido' })
  next();
})
 */

// nao original
// traz os vestigios de acordo com o usuario e o tipo de pericia ?
app.get('/vestigio', vestigios.index)

app.get('/dowloadpop', pops.index)


module.exports = app