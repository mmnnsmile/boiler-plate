const express = require('express')
const app = express()
const port = 3000
//


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://minseon:qorghkwja1!@boiler-plate.5zbwf.mongodb.net/minseon?retryWrites=true&w=majority',
{
    useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(()=>console.log('MongoDb connected')).catch(err =>console.log('MongoDB Connected err'))


app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})