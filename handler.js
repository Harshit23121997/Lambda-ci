'use strict';
const app = require('.')
const serverless = require ('serverless-http')
module.exports.index = serverless(app)
