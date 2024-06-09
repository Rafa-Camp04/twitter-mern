const express = require("express")

const app = express();

app.get('/', (request, response) => {
    response.send('Hello from Express!');
})

app.post('/users', (request, response) => {

})

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));