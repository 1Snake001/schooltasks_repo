import express from 'express';
import cors from 'cors';

const port = 5000;
const app = express();
app.use(express.json());
app.use(cors());

app.get(['/search','/search/:brand'], (req,res)=> {
    res.json(
        {
            "result": "ok",
            "data": [
                {
                    "license":"HMZ-140",
                    "brand":"Audi",
                    "model":"A8",
                    "year": 2016,
                    "color": "red"
                },
                {
                  "license":"HMZ-555",
                  "brand":"BMZ",
                  "model":"Z4",
                  "year":2011,
                  "color":"pink"
                }
            ]
        }
    );
});

app.listen(port,() => {
    console.log(`Listening on ${port}...`);
});