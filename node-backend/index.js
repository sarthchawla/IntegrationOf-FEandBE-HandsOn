const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    // res.json(
    //     {
    //         name: "Jeff Bezoz",
    //         age: 30,
    //         designation: "Founder",
    //         salary: "$1000000000000000",
    //         workersUnder: [
    //             {
    //                 name: "Sarthak",
    //                 age: 24,
    //                 salary:"$2000",
    //                 designation: "CTO",
    //                 workersUnder:[
    //                 ]
    //             },
    //             {
    //                 name: "Tushar",
    //                 age: 30,
    //                 salary:"$200000",
    //                 designation: "COO",
    //                 workersUnder:[
    //                 ]
    //             }
    //         ]
    //     });
res.sendFile(__dirname + '/jsonData.json');
});

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});
