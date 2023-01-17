import docterModel from "../models/docter-model.js"


export async function save (name,phone,experience){

        const result = new docterModel({
            name,
            phone,
            experience
        })
       await result.save()
        return {result}
    
}


export async function getAllData (){
    const result =await docterModel.find()
    return {result}
}


export async function getSingleData(id){
    const result = await docterModel.findById(id)
    return {result}
}


export async function update(req,res){
    const result = await docterModel.findByIdAndUpdate(req.params.id,
    {
        name:req.body.name,
        phone:req.body.phone,
        experience:req.body.experience
    },{
        new:true
    })
return {result}
}

export async function Delete (id){
    const result = await docterModel.findByIdAndDelete(id)
    return {result}
}