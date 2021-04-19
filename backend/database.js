import mongoose from 'mongoose'
const connectdb = async()=>{
    try {
        await mongoose.connect('mongodb+srv://ve4rexe:icup@cluster0.dchbg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('if you see this, you dont have an error!')
    } catch (error) {
        console.log('try and decipher this stupid lmao ', error)
    }
}
export default connectdb