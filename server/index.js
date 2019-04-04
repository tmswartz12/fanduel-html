const path = require('path')
const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
module.exports = app

const createApp = () => {
  // static file-serving middleware

  app.use(express.static(path.join(__dirname, '..', 'public')))

  app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'client/index.html'))
  })
}

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  )
}

async function bootApp() {
  await createApp()
  await startListening()
}

// This evaluates as true when this file is run directly from the command line,
if (require.main === module) {
  bootApp()
} else {
  createApp()
}
