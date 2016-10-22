'use strict';

/**
 * module dependencies
 */
var getQueryString = require( '../../src/helpers/get-query-string' );
var test = require( 'tap' ).test;

test( 'getQueryString()', function ( t ) {
  var query_string = getQueryString();

  t.same( query_string, {}, 'query_string = {}' );
  t.end();
} );

test( 'getQueryString( { count: 3 } )', function ( t ) {
  var query_string = getQueryString( { count: 3 } );

  t.same( query_string, { count: 3 }, 'query_string = { count: 3 }' );
  t.end();
} );

test( 'getQueryString( { start: 0 } )', function ( t ) {
  var query_string = getQueryString( { start: 0 } );

  t.same( query_string, { start: 0 }, 'query_string = { start: 0 }' );
  t.end();
} );


test( 'getQueryString( { count: 3, start: 0 } )', function ( t ) {
  var query_string = getQueryString( { count: 3, start: 0 } );

  t.same( query_string, { count: 3, start: 0 }, 'query_string = { count: 3, start: 0 }' );
  t.end();
} );
