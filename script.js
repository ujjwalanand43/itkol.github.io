const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;
const mongoose = require('mongoose');
const home = fs.readFileSync('index.html')
const contact = fs.readFileSync('./contact.html')

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('./css')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
// app.set('view engine', 'pug') // Set the template engine as pug
// app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
  res.end(home)
   res.status(200).render('../index.html')
})

app.get('/contact', (req, res)=>{
    res.end(contact)

  })


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })






// app.post('/', (req, res)=>{
//     name = req.body.name
//     age = req.body.age
//     gender = req.body.gender
//     address = req.body.address
//     more = req.body.more

// }
