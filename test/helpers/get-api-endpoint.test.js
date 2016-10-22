'use strict';

/**
 * module dependencies
 */
var getApiEndpoint = require( '../../src/helpers/get-api-endpoint' );
var test = require( 'tap' ).test;

test( 'getApiEndpoint( all )', function ( t ) {
  var endpoint = getApiEndpoint( 'all' );

  t.equal(
    endpoint,
    'https://archive.org/metadata/:identifier',
    'endpoint = https://archive.org/metadata/:identifier'
  );

  t.end();
} );

test( 'getApiEndpoint( collection )', function ( t ) {
  var endpoint = getApiEndpoint( 'collection' );

  t.equal(
    endpoint,
    'https://archive.org/metadata/:identifier/metadata/collection',
    'endpoint = https://archive.org/metadata/:identifier/metadata/collection'
  );

  t.end();
} );

test( 'getApiEndpoint( collection_index )', function ( t ) {
  var endpoint = getApiEndpoint( 'collection_index' );

  t.equal(
    endpoint,
    'https://archive.org/metadata/:identifier/metadata/collection/:index',
    'endpoint = https://archive.org/metadata/:identifier/metadata/collection/:index'
  );

  t.end();
} );

test( 'getApiEndpoint( files )', function ( t ) {
  var endpoint = getApiEndpoint( 'files' );

  t.equal(
    endpoint,
    'https://archive.org/metadata/:identifier/files',
    'endpoint = https://archive.org/metadata/:identifier/files'
  );

  t.end();
} );

test( 'getApiEndpoint( files_count )', function ( t ) {
  var endpoint = getApiEndpoint( 'files_count' );

  t.equal(
    endpoint,
    'https://archive.org/metadata/:identifier/files_count',
    'endpoint = https://archive.org/metadata/:identifier/files_count'
  );

  t.end();
} );

test( 'getApiEndpoint( files_index )', function ( t ) {
  var endpoint = getApiEndpoint( 'files_index' );

  t.equal(
    endpoint,
    'https://archive.org/metadata/:identifier/files/:index/name',
    'endpoint = https://archive.org/metadata/:identifier/files/:index/name'
  );

  t.end();
} );

test( 'getApiEndpoint( metadata )', function ( t ) {
  var endpoint = getApiEndpoint( 'metadata' );

  t.equal(
    endpoint,
    'https://archive.org/metadata/:identifier/metadata',
    'endpoint = https://archive.org/metadata/:identifier/metadata'
  );

  t.end();
} );

test( 'getApiEndpoint( server )', function ( t ) {
  var endpoint = getApiEndpoint( 'server' );

  t.equal(
    endpoint,
    'https://archive.org/metadata/:identifier/server',
    'endpoint = https://archive.org/metadata/:identifier/server'
  );

  t.end();
} );

test( 'getApiEndpoint( title )', function ( t ) {
  var endpoint = getApiEndpoint( 'title' );

  t.equal(
    endpoint,
    'https://archive.org/metadata/:identifier/metadata/title',
    'endpoint = https://archive.org/metadata/:identifier/metadata/title'
  );

  t.end();
} );
