/* eslint no-param-reassign: off */

'use strict';

/**
 * module dependencies
 */
var getGenericRequestOptions = require( 'generic-request-options' );
var postData = require( './post-data' );

/**
 * @param {Object} [user_options]
 * @param {Object} [request_headers]
 *
 * @returns {Object}
 */
function postRequestOptions( user_options, request_headers ) {
  var identifier;
  var request_options;

  request_options = {};
  user_options = user_options || {};

  identifier = encodeURIComponent( user_options.identifier );

  request_options = getGenericRequestOptions( request_options, request_headers );
  request_options.form = postData( user_options );
  request_options.method = 'post';

  request_options.url = 'https://archive.org/metadata/:identifier'
    .replace( ':identifier', identifier );

  return request_options;
}

module.exports = postRequestOptions;
