const express = require("express");
const app = express();
const rootRouter = require("./routes/index");
const cors = require("cors");
const { connectdB } = require("./db");

app.use(cors());
app.use(express.json());

app.use('/api/v1', rootRouter);

connectdB();

app.listen(3000, () => {
    console.log('Server running on port 3000');
})

