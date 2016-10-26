/* eslint no-param-reassign: off */

'use strict';

/**
 * @param {{}} user_options
 * @param {number} user_options.count
 * @param {number} user_options.start
 *
 * @returns {{}}
 */
function getQueryString( user_options ) {
  var query_string = {};

  user_options = user_options || {};

  if ( typeof user_options.count === 'number' && !isNaN( user_options.count ) ) {
    query_string.count = String( user_options.count );
  }

  if ( typeof user_options.start === 'number' && !isNaN( user_options.start ) ) {
    query_string.start = String( user_options.start );
  }

  return query_string;
}

module.exports = getQueryString;
