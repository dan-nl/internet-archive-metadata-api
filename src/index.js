'use strict';

var api = {};

api.getRequestOptions = require( './helpers/get-request-options' );
api.postRequestOptions = require( './helpers/post-request-options' );
api.read = require( './read' );
api.write = require( './write' );

module.exports = api;
