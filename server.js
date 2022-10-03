const express = require('express');
const app = express();

app.use(express.json());  // When we want to be able to accept JSON.
app.listen(4040, () => console.log('Server running on 4040'));

app.get("/", function (req, res) {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    res.send(`Hello World`);
});