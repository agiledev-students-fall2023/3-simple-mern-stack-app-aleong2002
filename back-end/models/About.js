const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aboutSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    url: {
        type: String,
        required: true,
    }
  },
)

// create mongoose Model
const Message = mongoose.model('About', aboutMessage)

// export the model so other modules can import it
module.exports = {
  About,
}
