const express = require('express');
const router = express.Router();
const axios = require('axios');
const rp = require('request-promise');

const API_KEY = "OV/4V+9Q7ku/pZ5Z6XceSuIE9uW0GewU3U15mxJ2sPrVGPTukDZ1kxoB+kNya7vgcDI85GTtPeagkaK1d3RwNg==";
const baseUrl = "https://ussouthcentral.services.azureml.net/workspaces/2587f003fd46485290f7579289343e2f/services/90c8b9b2e64f462498a0022f3ca9991f/execute?api-version=2.0&details=true";

router.get('/', async (req, res, next) => {
    axios.post(baseUrl, {
        "Inputs": {
          "input1": {
            "ColumnNames": [
              "age (days)",
              "height (cm)",
              "weight (kg)",
              "systolic",
              "diastolic",
              "cholesterol",
              "gluc",
              "smoke",
              "alcohol",
              "active",
              "yCardio"
            ],
            "Values": [
              [
                "18875",
                "171",
                "29",
                "110",
                "70",
                "2",
                "1",
                "0",
                "0",
                "1",
                "0"
              ]
            ]
          }
        },
        "GlobalParameters": {}
      }, {
        "Authorization" : `Bearer OV/4V+9Q7ku/pZ5Z6XceSuIE9uW0GewU3U15mxJ2sPrVGPTukDZ1kxoB+kNya7vgcDI85GTtPeagkaK1d3RwNg==`,
        'Access-Control-Allow-Origin': "*"
    }).then(result => {
        console.log(result);
        res.status(200).json(result);
    }).catch(err => {
        console.log(err)
        res.status(400).json(err)
    });
    
});

module.exports = router;





