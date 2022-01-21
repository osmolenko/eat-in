import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  image: String,
})

userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email: new RegExp(email, 'i') })
}

export default mongoose.models.User || mongoose.model('User', userSchema)
