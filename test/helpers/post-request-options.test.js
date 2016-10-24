/* eslint max-len: off */

'use strict';

/**
 * module dependencies
 */
var postRequestOptions = require( '../../src/helpers/post-request-options' );
var test = require( 'tap' ).test;

test( 'postRequestOptions()', function ( t ) {
  var options = postRequestOptions();

  var expected = {
    form: {},
    headers: {
      'user-agent': 'node.js/%node request (https://www.npmjs.com/package/request)'
        .replace( '%node', process.version )
    },
    method: 'post',
    timeout: 10000,
    url: 'https://archive.org/metadata/undefined'
  };

  t.same( options, expected, 'should return request options that match the expected test object' );
  t.end();
} );

test( 'postRequestOptions( user_options )', function ( t ) {
  var user_options = {
    access: 's3-access-token',
    identifier: 'test-api',
    patch: '[ { "add": "/description", "value": "Testing the limits ..." }, { "add": "/publisher", "value": "Philadelphia P. Blakiston" } ]',
    secret: 's3-secret',
    target: 'metadata'
  };

  var options = postRequestOptions( user_options );

  var expected = {
    form: {
      '-patch': '%5B%20%7B%20%22add%22%3A%20%22%2Fdescription%22%2C%20%22value%22%3A%20%22Testing%20the%20limits%20...%22%20%7D%2C%20%7B%20%22add%22%3A%20%22%2Fpublisher%22%2C%20%22value%22%3A%20%22Philadelphia%20P.%20Blakiston%22%20%7D%20%5D',
      '-target': 'metadata',
      access: 's3-access-token',
      secret: 's3-secret'
    },
    headers: {
      'user-agent': 'node.js/%node request (https://www.npmjs.com/package/request)'
        .replace( '%node', process.version )
    },
    method: 'post',
    timeout: 10000,
    url: 'https://archive.org/metadata/test-api'
  };

  t.same( options, expected, 'should return request options that match the expected test object' );
  t.end();
} );
