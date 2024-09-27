const express = require('express');
const app = express();

//http://localhost:3000
app.get('/',(req,res) => {
    res.send('Hello World');
})

//http://localhost:3000
app.post('/', (req, res) =>{
    res.send('Post - hello world');
})

//listen to server
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
})