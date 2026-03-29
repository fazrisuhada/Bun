import { Hono } from 'hono'

const app = new Hono()

//app.get('/', (c) => {
//  return c.text('Hello Hono!')
//})

//basic
app.get('/', (c) =>  c.text('GET /'))
app.post('/', (c) =>  c.text('POST /'))
app.put('/', (c) =>  c.text('PUT /'))
app.delete('/', (c) =>  c.text('DELETE /'))

//path paramater
app.get('/user/:name', (c) => {
  const name = c.req.param('name')
  return c.text(`Hello ${name}`)
})

//regexp
app.get('/article/:year{[0-9]+}/:title{[a-z]+}', async (c) => {
  const {year, title} = c.req.param()
  return c.text(`Book year ${year} - title ${title}`)
})

export default app
