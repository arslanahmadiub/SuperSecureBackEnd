const http = require("http");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;


const app = express();
app.use(cors());
const server = http.createServer(app);


// Connect Database

connectDB();

app.use(express.json({ extended: false }));


app.get("/", (req, res) => res.send("Api Running"));



app.use("/images", express.static("upload/images"))

app.use("/profilePost", require("./routes/profilePost"));
app.use("/auth", require("./routes/auth"));
app.use("/singleUpload", require("./routes/uploadSingle"));

app.use("/devicePost", require("./routes/devicePost"));
app.use("/deviceGet", require("./routes/deviceGet"));

app.use("/packagePost", require("./routes/packagePost"));
app.use("/packageGet", require("./routes/packageGet"));
app.use("/packageDelete", require("./routes/packageDelete"));
app.use("/packageUpdate", require("./routes/packageUpdate"));


server.listen(port, () => console.log(`Server has started at port ${port}`));




