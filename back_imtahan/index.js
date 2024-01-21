import express, { json } from 'express';
import mongoose, { Schema } from 'mongoose';
import cors from 'cors'
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
const patoSchema = new Schema({
    image: String, 
    name: String,
    desc: String,
    price:Number
    
  });

  const patoModel = mongoose.model('Pato', patoSchema);

app.get('/', async (req, res) => {
    const pato = await patoModel.find({})
  res.send(pato)
})

app.get('/:id', async (req, res) => {
    const {id} = req.params
    const pato = await patoModel.findById(id)
    res.send(pato)
  })
  
  app.post('/', async(req, res) => {
    const {image,name,desc,price} = req.body
    const newPatos = new patoModel({image,name,desc,price})
    await newPatos.save()
    res.send('Got a POST request')
  })
  
  app.put('/:id', async (req, res) => {
    const {id} = req.params
    const {image,name,desc,price} = req.body
const pato = await patoModel.findByIdAndUpdate(id,{image,name,desc,price})
    res.send(pato)
  })
  
  app.delete('/:id', async (req, res) => {
    const {id} = req.params
const pato = await patoModel.findByIdAndDelete(id)
    res.send(pato)
  })

  mongoose.connect('mongodb+srv://mahammad:mahammad@cluster0.errjuf4.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})