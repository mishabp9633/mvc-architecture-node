import { save,update,getAllData,getSingleData,Delete } from "../service/hospital-service.js"

export async function hospitalData (req,res,next){

    let name = req.body.name
    let phone = req.body.phone
    let address = req.body.address
try{
    const result = await save(name,phone,address)
    res.send(result)
}
catch(err){
     next (err)
}
}


export async function getHospitals(req,res,next){
    try{
        const result = await getAllData()

        res.send(result)
    }
    catch(err){
        next(err)
    }
}


export async function getHospital(req,res,next){
    try{
        const result = await getSingleData(req.params.id)

        res.send(result)
    }
    catch(err){
        next(err)
    }
}


export async function updateData(req,res,next){
    try{
        const result = await update(req,res)
        res.send(result)
    }catch(err){
        next(err)
    }
}


export async function deleteData(req,res,next){
    try{
        const result = await Delete(req.params.id)
        res.send(result)
    }
    catch(err){
        next(err)
    }
}

