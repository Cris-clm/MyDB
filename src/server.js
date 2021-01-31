const express=require('express')
const app = express()
//utilizo la siguiente forma llamada descontructor
const {getUsers,addUser,updateUser,deleteUser}=require('./models/user.models')
let Puerto=4500;
// prepara al servidor para leer body´s con 
//codificación application/json
app.use(express.json())
//Creando las rutas 
app.get('/user',(req,res)=>{
    res.status(200).json({succes:true,data:getUsers(),mensajes:'todos los usuarios de db'})
})

app.post('/user',(req,res)=>{
    let body=req.body
    addUser(body)
    res.status(200).json({succes:true,data:getUsers(),mensajes:'Se agrego con exito el nuevo usuario'})
})
// ponemos a escuchar el servidor
app.listen(Puerto,()=>{
    console.log(`Servidor ejecutando en el puerto :${Puerto}`);
})
