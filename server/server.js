const express = require("express")
const app = express()
const cors = require("cors");
const { response } = require("express");
const port = 5000;
const appRouter = express.Router();

app.use(cors());
app.use(express.json());

app.post("/test", (req, res) => {
    console.log(req.body.string_to_cut);
    const string_to_be_cut = req.body.string_to_cut;
    const stringLength = string_to_be_cut.length;
    let holder_string = "";
    for (let i = 2; i < stringLength; i += 3){
        let character = string_to_be_cut.charAt(i);
        holder_string = holder_string.concat(character);
        console.log(holder_string);
    }
    console.log("the final returned string is " + holder_string);
    res.json({return_string: [holder_string]});
})

app.listen(port, ()=> {
    console.log(`Node Server listening on port ${port}`)
})