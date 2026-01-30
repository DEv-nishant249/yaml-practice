import express from 'express'

const app = express()

const PORT = process.env.PORT ?? 8080

app.get("/health",(req,res)=>{
res.json({
    message:"Server mast chal raha hai"
})
})

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)

})