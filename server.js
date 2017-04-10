const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const request = require('request');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/user', (req, res) => {
	console.log(req.body);
	console.log(req.body.email);

	const user = {
		name: `${req.body.imie} ${req.body.nazwisko}`,
		email: req.body.email,
		campaign: {
        	campaignId: "TZylZ"
    	},
	}

	request.post({
		headers: {
			'X-Auth-Token': 'api-key 82b140ed528056e279bef20314b1c6dd',
			'content-type' : 'application/json',
		},
		url:     'https://api.getresponse.com/v3/contacts',
		body: JSON.stringify(user),
	}, (error, response, body) => {
		res.sendStatus(200);
	});
});

app.listen(3000);