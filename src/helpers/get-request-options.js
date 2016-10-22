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
  var options = user_options || {};

  var identifier = encodeURIComponent( options.identifier );
  var index = encodeURIComponent( String( options.index ) );
  var type = encodeURIComponent( options.type || 'all' );

  options.method = 'get';

  options.url = getApiEndpoint( type )
    .replace( ':identifier', identifier )
    .replace( ':index', index );

  options.qs = getQueryString( options );
  options = getGenericRequestOptions( options, request_headers );

  return options;
};
