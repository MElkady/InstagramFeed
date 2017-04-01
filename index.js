"use strict";

const request = require('request')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const token = process.env.TOKEN

app.get('/token', function (req, res) {
  res.send('Hello, token is in the URL now!')
})

app.get('/feed', function (req, res) {
	res.set('Content-Type', 'application/json');
  	request(
	    { method: 'GET'
	    , uri: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token
	    , gzip: true
	    }
  	, function (error, response, body) {
  		if(!error) {
  			return res.status(500).send(response.body)
  		}

    	res.status(200).send(response);
    }
  )
})

app.listen(port, function () {
  console.log('App listening on port 3000!')
})