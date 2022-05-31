'use strict';
const index = require('./index')
const serverless = require ('serverless-http')
module.exports.index = serverless(index)
