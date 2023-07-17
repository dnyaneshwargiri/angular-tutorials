const express = require('express')
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());

app.get('/warnings', (req, res) => {
    let data={data:"You have been warned danny."}
    res.status(200)
    res.send(data);
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));