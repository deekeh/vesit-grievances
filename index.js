const path = require("path");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

const PORT = 2000 || process.env.PORT;
app.listen(PORT, console.log(`Server started at port ${PORT}`));