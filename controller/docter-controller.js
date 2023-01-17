import {
    getAllData, getSingleData, update, Delete, save
} from '../service/docter-service.js'

export async function docterData(req, res, next) {
    try {
        let name = req.body.name
        let phone = req.body.phone
        let experience = req.body.experience

        const result = await save(name, phone, experience)
        res.send(result)
    }
    catch (err) {
        next(err)
    }
}


export async function getDocters(req,res,next){
    try{
        const result = await getAllData()

        res.send(result)
    }
    catch(err){
        next(err)
    }
}



export async function getDocter(req,res,next){
    try{
        const result = await getSingleData(req.params.id)
        res.send(result)
    }catch(err){
        next(err)
    }
}


export async function updateData(req,res,next){
    try{
        const result = await update(req,res)
        res.send(result)
    }catch (err){
        next(err)
    }
  
}


export async function deleteData(req,res,next){
    try{
        const result = await Delete(req.params.id)
        res.send(result)
    }catch(err){
        next(err)
    }
    
}