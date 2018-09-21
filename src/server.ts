import * as express from 'express'
const app = express()
const PORT:number = 3000 || process.env.PORT

app.get('/ping',  (req, res) => {
  res.send('pong')
});

app.listen(3000, () => {
  console.log(`Listening on port ${PORT}!`)
});

