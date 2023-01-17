import hospitalModel from "../models/hospital-model.js"

export async function save(name,phone,address){
    const result= new hospitalModel({
        name,
        phone,
        address
    })
    await result.save()
    return {result}
}


export async function getAllData(){
    const result = await hospitalModel.find()
    return {result}
}


export async function getSingleData(id){
   const result = await hospitalModel.findById(id)
   return {result}
}

export async function update(req,res){
    const result= await hospitalModel.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        phone:req.body.phone,
        address:req.body.address},

        {new:true}

        )
    return {result} 
}

export async function Delete(id){
    const result = await hospitalModel.findByIdAndDelete(id)
    return {result}
}
