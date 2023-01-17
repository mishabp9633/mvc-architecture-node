import express from 'express'
import { Initialise } from './database/connection.js'
import hospitalRoute from './routes/hospital-route.js'
import docterRouter from './routes/docter-router.js'

    await Initialise()

    const app = express()
    app.use(express.json({limit:"50mb"}))
    app.use(express.urlencoded({limit:"50mb",extended:true}))

    
    app.use('/hospital', hospitalRoute)
    app.use('/docter', docterRouter)

    
    const port=process.env.PORT || 4000
    app.listen(port , ()=>{
        console.log(`server listening at http://localhost:${port}`);
    })

