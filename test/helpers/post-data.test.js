/* eslint max-len: off */

'use strict';

/**
 * module dependencies
 */
var postData = require( '../../src/helpers/get-post-data' );
var test = require( 'tap' ).test;

test( 'postData()', function ( t ) {
  var post_data = postData();

  t.same( post_data, {}, 'post_data = {}' );

  t.end();
} );

test( 'postData( { access: \'s3-access\' } )', function ( t ) {
  var user_options = {
    access: 's3-access'
  };

  var post_data = postData( user_options );

  t.same( post_data, user_options, 'post_data = { access: \'s3-access\' }' );

  t.end();
} );

test( 'postData( { patch: [ { "add": "/identifier", "value": "test-api" } ] } )', function ( t ) {
  var user_options = {
    patch: '[ { "add": "/identifier", "value": "test-api" } ]'
  };

  var expected = {
    '-patch': '[ { "add": "/identifier", "value": "test-api" } ]'
  };

  var post_data = postData( user_options );

  t.same( post_data, expected, 'post_data should be the same as the expected object' );

  t.end();
} );

test( 'postData( { secret: \'s3-secret\' } )', function ( t ) {
  var user_options = {
    secret: 's3-secret'
  };

  var post_data = postData( user_options );

  t.same( post_data, user_options, 'post_data = { secret: \'s3-secret\' }' );

  t.end();
} );

test( 'postData( { target: \'metadata\' } )', function ( t ) {
  var user_options = {
    target: 'metadata'
  };

  var expected = {
    '-target': 'metadata'
  };

  var post_data = postData( user_options );

  t.same( post_data, expected, 'post_data = { \'-target\': \'metadata\' }' );

  t.end();
} );

test( 'postData( user_options )', function ( t ) {
  var user_options = {
    access: 's3-access',
    patch: '[ { "add": "/identifier", "value": "test-api" } ]',
    secret: 's3-secret',
    target: 'metadata'
  };

  var expected = {
    '-patch': '[ { "add": "/identifier", "value": "test-api" } ]',
    '-target': 'metadata',
    access: 's3-access',
    secret: 's3-secret'
  };

  var post_data = postData( user_options );

  t.same( post_data, expected, 'post_data should be the same as the expected object' );

  t.end();
} );

test( 'postData( { unhandled: \'variable\' } )', function ( t ) {
  var user_options = {
    unhandled: 'variable'
  };

  var post_data = postData( user_options );

  t.same( post_data, {}, 'post_data should not include unhandled properties' );

  t.end();
} );
