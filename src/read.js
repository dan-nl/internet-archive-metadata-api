'use strict';

/**
 * module requirements
 */
var request = require( 'request-as-bluebird' );
var getRequestOptions = require( './helpers/get-request-options' );

/**
 * @param {Object} [user_options]
 * @param {Object} [request_options]
 *
 * @returns {Promise.<{ body:string, response:IncomingMessage }>}
 */
function read( user_options, request_options ) {
  return request( getRequestOptions( user_options, request_options ) );
}

module.exports = read;
