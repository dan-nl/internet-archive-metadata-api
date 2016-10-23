'use strict';

/**
 * module requirements
 */
var request = require( 'request-as-bluebird' );
var postRequestOptions = require( './helpers/post-request-options' );

/**
 * @param {Object} [user_options]
 * @param {Object} [request_options]
 * @param {boolean} debug
 *
 * @returns {Promise.<{ body:string, response:IncomingMessage }>}
 */
function write( user_options, request_options, debug ) {
  console.log( postRequestOptions( user_options, request_options ) );

  return request( postRequestOptions( user_options, request_options ), debug );
}

module.exports = write;
