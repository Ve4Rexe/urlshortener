import mongoose from 'mongoose'
const urlSchema = new mongoose.Schema({
    urlcode: String,
    longurl: String,
    shorturl: String,
    date: {
        type: String,
        default: Date.now
    }
})
export default mongoose.model('UrlSchema', urlSchema)
