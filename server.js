import express from 'express'
import noteRouter from './routers/noteRouter.js'

const app=express();
const PORT = 3000;

//built-in middleware
app.use(express.text()); 

//calling routers
app.use('/api/note',noteRouter)

app.listen(PORT,()=>{
    console.log('server is running on port number ',PORT)
})
