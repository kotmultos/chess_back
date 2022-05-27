const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const {imageRouter} = require("./routes");

const app = express();

mongoose.connect('mongodb://localhost:27017/db_control_task').then(() => {
    console.log('mongo is connected!!!!!!!!');
})

app.use(cors({origin: _configureCors}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/images', imageRouter)

app.listen(5000, () => {
    console.log("app listen to 5000");
})

function _configureCors(origin, callback) {
    return callback(null, true);
}