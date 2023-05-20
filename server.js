const http = require("http");
const express = require("express");
var cors = require("cors");
const itemRouter = require("./routes/items");

const app = express();
app.use(express.json());

app.use(cors({origin: "http:localhost:8100"}));

app.use("/items", itemRouter);

app.use("/", (req, res)=>{
    res.send("Hello this is speaking from port 8000");
})

const server = http.createServer(app);
const port = 8000;
server.listen(port);

console.debug("Server started at port " + port);