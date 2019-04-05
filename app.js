const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const predictRoute = require('./routes/predict');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.json());

app.use('/api/predict', predictRoute);

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