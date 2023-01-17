import mongoose from 'mongoose'


const docterSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    }
})

const Model = mongoose.model('Docter', docterSchema)

export default Model