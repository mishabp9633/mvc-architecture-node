import  express from 'express'
import {
    getDocter,getDocters,updateData,deleteData,docterData
} from '../controller/docter-controller.js'


const router = express.Router()


router.post('/',docterData)

router.get('/',getDocters)

router.get('/:id',getDocter)

router.put('/:id',updateData)

router.delete('/:id',deleteData)

export default router

