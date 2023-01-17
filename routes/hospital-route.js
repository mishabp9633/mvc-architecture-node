import express from 'express'
import { 
    hospitalData,updateData,deleteData,getHospital,getHospitals 
} from '../controller/hospital-controller.js'


const router=express.Router()


router.post('/',hospitalData)

router.get('/',getHospitals)

router.get('/:id',getHospital)

router.put('/:id',updateData)

router.delete('/:id',deleteData)

export default router