import mongoose from 'mongoose'
mongoose.set('strictQuery', false);

const connection_string=
"mongodb://localhost/Hospital_db"
export async function Initialise(){
try{
    await mongoose.connect(connection_string)
    console.log('db connected');
}catch(err){
    throw err
}
}
