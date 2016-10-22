'use strict';

/**
 * module dependencies
 */
var getRequestOptions = require( '../../src/helpers/get-request-options' );
var test = require( 'tap' ).test;

test( 'getRequestOptions()', function ( t ) {
  var options = getRequestOptions();

  t.equal(
    options.url,
    'https://archive.org/metadata/undefined',
    'options.url = https://archive.org/metadata/undefined'
  );

  t.same( options.qs, {}, 'options.qs = {}' );
  t.end();
} );

test( 'getRequestOptions( user_options ) identifier = test', function ( t ) {
  var user_options = {
    identifier: 'test'
  };

  var options = getRequestOptions( user_options );

  t.equal(
    options.url,
    'https://archive.org/metadata/test',
    'options.url = https://archive.org/metadata/test'
  );

  t.same( options.qs, {}, 'options.qs = {}' );
  t.end();
} );

test( 'getRequestOptions( user_options ) identifier = test, type = collection', function ( t ) {
  var user_options = {
    identifier: 'test',
    type: 'collection'
  };

  var options = getRequestOptions( user_options );

  t.equal(
    options.url,
    'https://archive.org/metadata/test/metadata/collection',
    'options.url = https://archive.org/metadata/test/metadata/collection'
  );

  t.same( options.qs, {}, 'options.qs = {}' );
  t.end();
} );

test( 'getRequestOptions( user_options ) identifier = test, index = 1, type = collection_index',
  function ( t ) {
    var user_options = {
      identifier: 'test',
      index: 1,
      type: 'collection_index'
    };

    var options = getRequestOptions( user_options );

    t.equal(
      options.url,
      'https://archive.org/metadata/test/metadata/collection/1',
      'options.url = https://archive.org/metadata/test/metadata/collection/1'
    );

    t.same( options.qs, {}, 'options.qs = {}' );
    t.end();
  }
);

test( 'getRequestOptions( user_options ) identifier = test, type = files', function ( t ) {
  var user_options = {
    identifier: 'test',
    type: 'files'
  };

  var options = getRequestOptions( user_options );

  t.equal(
    options.url,
    'https://archive.org/metadata/test/files',
    'options.url = https://archive.org/metadata/test/files'
  );

  t.same( options.qs, {}, 'options.qs = {}' );
  t.end();
} );

test( 'getRequestOptions( user_options ) count = 3, identifier = test, start = 0, type = files',
  function ( t ) {
    var user_options = {
      count: 3,
      identifier: 'test',
      start: 0,
      type: 'files'
    };

    var options = getRequestOptions( user_options );

    t.equal(
      options.url,
      'https://archive.org/metadata/test/files',
      'options.url = https://archive.org/metadata/test/files'
    );

    t.same( options.qs, { count: 3, start: 0 }, 'options.qs = { count: 3, start: 0 }' );
    t.end();
  }
);

test( 'getRequestOptions( user_options ) identifier = test, type = files_count', function ( t ) {
  var user_options = {
    identifier: 'test',
    type: 'files_count'
  };

  var options = getRequestOptions( user_options );

  t.equal(
    options.url,
    'https://archive.org/metadata/test/files_count',
    'options.url = https://archive.org/metadata/test/files_count'
  );

  t.same( options.qs, {}, 'options.qs = {}' );
  t.end();
} );

test( 'getRequestOptions( user_options ) identifier = test, type = files_index', function ( t ) {
  var user_options = {
    identifier: 'test',
    index: 0,
    type: 'files_index'
  };

  var options = getRequestOptions( user_options );

  t.equal(
    options.url,
    'https://archive.org/metadata/test/files/0/name',
    'options.url = https://archive.org/metadata/test/files/0/name'
  );

  t.same( options.qs, {}, 'options.qs = {}' );
  t.end();
} );

test( 'getRequestOptions( user_options ) identifier = test, type = metadata', function ( t ) {
  var user_options = {
    identifier: 'test',
    type: 'metadata'
  };

  var options = getRequestOptions( user_options );

  t.equal(
    options.url,
    'https://archive.org/metadata/test/metadata',
    'options.url = https://archive.org/metadata/test/metadata'
  );

  t.same( options.qs, {}, 'options.qs = {}' );
  t.end();
} );

test( 'getRequestOptions( user_options ) identifier = test, type = server', function ( t ) {
  var user_options = {
    identifier: 'test',
    type: 'server'
  };

  var options = getRequestOptions( user_options );

  t.equal(
    options.url,
    'https://archive.org/metadata/test/server',
    'options.url = https://archive.org/metadata/test/server'
  );

  t.same( options.qs, {}, 'options.qs = {}' );
  t.end();
} );

test( 'getRequestOptions( user_options ) identifier = test, type = title', function ( t ) {
  var user_options = {
    identifier: 'test',
    type: 'title'
  };

  var options = getRequestOptions( user_options );

  t.equal(
    options.url,
    'https://archive.org/metadata/test/metadata/title',
    'options.url = https://archive.org/metadata/test/metadata/title'
  );

  t.same( options.qs, {}, 'options.qs = {}' );
  t.end();
} );
