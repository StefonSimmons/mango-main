const mongoose = require('../app.js')

const Schema = mongoose.Schema

const Message = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
)

  module.exports = mongoose.model('messages', Message) // exporting 'Message' to the controllers and 'messages' to MongoDB