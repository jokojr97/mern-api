const express = require('express')

const app = express();
const port = 4000;

app.use(() => {
    console.log("hello server");
    console.log("hello lagi");
})

app.listen(port);


