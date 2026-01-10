const express = require('express')
const port =3000
const app =express()
const mongoose = require('mongoose')
const Product = require('../models/model')
const product = require('../models/model')
const cors = require('cors')
require('dotenv').config();

app.use(cors());

// OPTION B: Secure (Recommended)
app.use(cors({
  origin: 'http://localhost:5173', // Allow only your React app
  methods: ['GET', 'POST'],        // Allow only specific methods
  credentials: true                // Allow cookies if needed
}));

app.use(express.json())
app.get('/',(req,res)=>{
      res.send("hello world")
})


//create product
app.post('/products', async(req,res)=>{
      try{
            if(!req.body){
                  return res.status(400).json({error:"product data is required"})
            }
            const {name, price, description,image} = req.body
            const product= new Product({name,price,description,image});
            await product.save()
            res.status(201).json({message:"product added", data:product})
      
      } catch(error) {
            res.status(500).json({error:"server Internal error"})
      }
})

app.get("/products/",async(req,res)=>{
      try{
            const product = await Product.find()
            res.status(200).json({message:"Product details recevied","product":product})
      }
      catch (error){
            res.status(404).json({message:"item  not  found"})    
      }
})

app.get("/products/:id",async(req,res)=>{
      try{
            const productID = req.params.id
            const product = await Product.find({_id:productID})
            res.status(200).json({message:"Product details recevied","product":product})
      }
      catch (error){
            res.status(404).json({message:"item  not  found"})    
      }
})

app.patch('/products/:id', async (req, res) => {
  try {
        const productID = req.params?.id
        console.log(productID);

        const newProduct = await Product.findByIdAndUpdate(productID, req.body, {new:true});
        if(!newProduct) {
            console.log("Stupid");
            return res.status(404).json({error: 'The product was not found'});
        }
        res.status(200).json({Product:newProduct})

    }  catch (error) {
        console.error("ID not found");
        res.status(500).json({error:error.message});
    }
})


async function main() {
      console.log("Connecting to:", process.env.MONGO_URI);
      await mongoose.connect(process.env.MONGODB_URL)
}
main()
      .then(()=>console.log("DB Connected"))
      .catch(err=>console.error(err))

app.listen(port,()=>{
      console.log('<==========================================server started==================================>')
})