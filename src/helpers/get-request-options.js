/* eslint no-param-reassign: off */

'use strict';

/**
 * module dependencies
 */
var getApiEndpoint = require( './get-api-endpoint' );
var getGenericRequestOptions = require( 'generic-request-options' );
var getQueryString = require( './get-query-string' );

/**
 * @param {Object} [user_options]
 * @param {Object} [request_headers]
 *
 * @returns {Object}
 */
module.exports = function getRequestOptions( user_options, request_headers ) {
  var request_options;
  var identifier;
  var index;
  var type;

  user_options = user_options || {};

  identifier = encodeURIComponent( user_options.identifier );
  index = encodeURIComponent( String( user_options.index ) );
  type = encodeURIComponent( user_options.type || 'all' );

  request_options = getGenericRequestOptions( user_options, request_headers );
  request_options.method = 'get';
  request_options.qs = getQueryString( user_options );

  request_options.url = getApiEndpoint( type )
    .replace( ':identifier', identifier )
    .replace( ':index', index );

  return request_options;
};
