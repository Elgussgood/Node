const express =require ('express')
//declaramos variable para hacer referencia a express
var app=express();
//le decimos al servidor que utilizamos public para archivos del cliente 
app.use(express.static('public'))
app.get('/ruta-get',(req,res)=>{
    res.send('<h1> Hola mundo desde la ruta get</h1>')
})

app.post('/ruta-post',(req,res)=>{
    res.send('<h1> Hola mundo desde la ruta post</h1>')
})
app.listen(8080,()=>{
    console.log("Puerto escuchando en 8080")
})