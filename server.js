const express = require('express');
const path = require('path');
const app = express();

app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res, next ) => {
  try{
    res.sendFile(path.join(__dirname, 'index.html'));
  }
  catch(err){
    console.log(err)
  }
})

// const init = () => {
//   try{
//     const port = process.env.PORT || 1744;
//     app.listen(port, () => console.log(`Listening port ${port}`))
//   }
//   catch(err){
//     console.log(err)
//   }
// }
// init();
const port = process.env.PORT || 1735;
app.listen(port, () => console.log(`Listening port ${port}`))