const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const predictRoute = require('./routes/predict');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use('/api/predict', predictRoute);

app.get('/', (req, res, next) => {
    res.status(200).json({
        hey: "uh oh"
    })
})

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    console.log(error);
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
})

module.exports = app;