import { createServer } from 'http'
import { readFile } from 'fs/promises'

const port = process.env.PORT || 8080

const server = createServer((req, res) => {
  let path = './pages/'
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  switch(req.url) {
    case '/': {
      path += 'index.html'
      break
    }
    case '/about': {
      path += 'about.html'
      break
    }
    case '/contact-me': {
      path += 'contact-me.html'
      break
    }
    default: {
      path +='404.html'
    }
  }

  readFile(path)
    .then((data) => res.write(data))
    .then(() => res.end())
    .catch((error) => console.log(error))
})

server.listen((port), () => {
  console.log(`Server running on port ${port}`)
})
