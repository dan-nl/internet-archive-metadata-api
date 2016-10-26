/* eslint no-param-reassign: off */

'use strict';

/**
 * @param {{}} user_options
 * @param {string} user_options.access
 * @param {string} user_options.patch
 * @param {string} user_options.secret
 * @param {string} user_options.target
 *
 * @returns {{}}
 */
function postData( user_options ) {
  var post_data = {};

  user_options = user_options || {};

  if ( user_options.access ) {
    post_data.access = user_options.access;
  }

  // @link https://tools.ietf.org/html/draft-ietf-appsawg-json-patch-02
  if ( user_options.patch ) {
    post_data[ '-patch' ] = user_options.patch;
  }

  if ( user_options.secret ) {
    post_data.secret = user_options.secret;
  }

  if ( user_options.target ) {
    post_data[ '-target' ] = user_options.target;
  }

  return post_data;
}

module.exports = postData;
