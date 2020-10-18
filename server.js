const { app } = require('./app')
const db = require('./db')
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'))