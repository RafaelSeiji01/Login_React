const express = require('express');
const app = express();
const routes = require('./routes');
const port = 3000;

app.use(express.json());
app.use(routes);

app.get("/", (req,res) => {
    res.send("hello word")
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
})