const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(express.static("assets"));



app.get("/", (req, res) => {
/*   console.log(req.url);
  console.log(req.method); */
  res.sendFile(path.join(__dirname, "index.hu.html"));
});

//GET /doubling
app.get('/doubling', (req, res) => {

    const input = req.query.input;
    let doublerObj;
    
    if (input) {
      doublerObj = {
        "received": parseInt(input),
        "result": 2 * parseInt(input)
      }
    } else {
      doublerObj = {
        "error": "Please provide an input!"
      }
    }
    res.send(JSON.stringify(doublerObj));
  });

app.listen(PORT, () => {
  console.log(`A szerver fut a ${PORT} csaportnán.`);
});
