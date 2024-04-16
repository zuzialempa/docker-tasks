const express = require('express')
const bodyParser = require('body-parser')
const { createClient } = require('redis')
const port = 3000
const client = createClient({
  url: `redis://${process.env.HOST}:6379`
})

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.text())

app.get('/', (req, res) => {
  console.log('You called "Hello World"')
  res.send('Hello World!')
})

app.get('/:key', async (req, res) => {
  console.log(`You called GET "${req.params.key}"`)
  const cachedData = await client.get(req.params.key);
  res.send(cachedData);
})


app.post('/:key', async (req, res) => {
  console.log(`You called POST ${req.params.key} with ${JSON.stringify(req.body)}`)
  await client.set(req.params.key, typeof req.body === 'object' ? JSON.stringify(req.body) : req.body);
  res.send(req.body);
})

app.listen(port, async () => {
  client.on('error', err => console.log('Redis Client Error', err));
  
  await client.connect();
  await client.set('kitty', 'Meow!');

  console.log(`Hello! I'm waiting on port: ${port}`)
})