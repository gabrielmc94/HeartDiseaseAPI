const express = require('express');
const router = express.Router();
const axios = require('axios');
const rp = require('request-promise');
const request = require('request');

const API_KEY = "OV/4V+9Q7ku/pZ5Z6XceSuIE9uW0GewU3U15mxJ2sPrVGPTukDZ1kxoB+kNya7vgcDI85GTtPeagkaK1d3RwNg==";
const baseUrl = "https://ussouthcentral.services.azureml.net/workspaces/2587f003fd46485290f7579289343e2f/services/90c8b9b2e64f462498a0022f3ca9991f/execute?api-version=2.0&details=true";

router.post('/', async (req, res, next) => {

    console.log(req.body)

    const options = {
        method: "POST",
        url: baseUrl,
        qs: { "api-version": "2.0" },
        headers: {
            "cache-control": "no-cache",
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Inputs: {
                input1: {
                    ColumnNames: [
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
                        "yCardio",
                    ],
                    // Values: [["18875", "171", "29", "110", "70", "2", "1", "0", "0", "1", "0"]],
                    Values: [
                        [
                            req.body.age, 
                            req.body.height, 
                            req.body.weight, 
                            req.body.systolic, 
                            req.body.diastolic, 
                            req.body.cholesterol, 
                            req.body.gluc,
                            req.body.smoke,
                            req.body.alcohol,
                            req.body.active,
                            "0"
                        ]
                    ]
                },
            },
        }),
    }

    request(options, (error, response, body) => {
        if (error) {
            res.status(200).json({
                message: "error"
            })
        } else {
            console.log(body)
            res.status(200).json({
                message: body
            })
        }
    })
    
});

module.exports = router;





