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
  var options = user_options || {};

  if ( typeof options.count === 'number' && !isNaN( options.count ) ) {
    query_string.count = options.count;
  }

  if ( typeof options.start === 'number' && !isNaN( options.start ) ) {
    query_string.start = options.start;
  }

  return query_string;
}

module.exports = getQueryString;
