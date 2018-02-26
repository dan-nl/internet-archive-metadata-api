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
      'date': new Date().toUTCString(),
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
      '-patch': '[ { "add": "/description", "value": "Testing the limits ..." }, { "add": "/publisher", "value": "Philadelphia P. Blakiston" } ]',
      '-target': 'metadata',
      access: 's3-access-token',
      secret: 's3-secret'
    },
    headers: {
      'date': new Date().toUTCString(),
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
