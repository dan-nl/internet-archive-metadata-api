# internet-archive-metadata-api
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][david-dm-image]][david-dm-url] [![Dev Dependency Status][david-dm-dev-image]][david-dm-dev-url] [![NSP Status][nsp-image]][nsp-url]

internet archive metadata api helper methods.

the methods in this module have been created based on the [The Internet Archive Metadata API][ia-api-url] blog post, which apply to internet archive items that already exist in the internet archive database.

## table of contents
* [installation](#installation)
* [use](#use)
    * [getRequestOptions( user_options, request_headers )](#getrequestoptions-user_options-request_headers-)
        * [user_options ( get )](#user_options--get-)
            * [count](#count--optional-)
            * [identifier](#identifier--required-)
            * [index](#index--optional-)
            * [start](#start--optional-)
            * [type](#type--optional-)
        * [request-headers ( get/post )](#request_headers--getpost-)
        * [api-endpoints](#api-endpoints)
    * [read( user_options, request_headers )](#read-user_options-request_headers-)
        * [user_options ( read )](#user_options--read-)
        * [request-headers ( read )](#request_headers--read-)
        * [basic](#basic--read-)
    * [postRequestOptions( user_options, request_headers )](#postrequestoptions-user_options-request_headers-)
        * [user_options ( post )](#user_options--post-)
            * [access](#access--required-)
            * [identifier](#identifier--required-)
            * [patch](#patch--required-)
            * [secret](#secret--required-)
            * [target](#target--required-)
        * [request-headers ( write )](#request_headers--write-)
    * [write( user_options, request_headers )](#write-user_options-request_headers-)
        * [user_options](#user_options--write-)
        * [request-headers](#request_headers--write-)
        * [basic](#basic--write-)
* [license](#license)

## installation
```javascript
npm install internet-archive-metadata-api
```

## use
this module provides two main methods: [`read`](#read-user_options-request_headers-) and [`write`](#write-user_options-request_headers-), however, [`getRequestOptions`](#getrequestoptions-user_options-request_headers-) and [`postRequestOptions`](#postrequestoptions-user_options-request_headers-) are also exposed for those that would rather initiate the request in a different manner than this module does with [request-as-bluebird][request-as-bluebird-url].
 
### getRequestOptions( [user_options][, request_headers] )
```javascript
 * @param {Object} [user_options]
 * @param {Object} [request_options]
 * @returns {Promise.<{ body:string, response:IncomingMessage }>}
```

#### user_options ( get )
```javascript
var user_options = {
  count: number,
  identifier: string,
  index: number,
  start: number
  type: string
};
```

##### count ( optional )
used in conjunction with the `files` endpoint to indicate the limit of file objects returned.

##### identifier ( required )
used in conjunction with all endpoints to determine which resource to retrieve.

##### index ( optional )
used in the `collection_index` and `files_index` endpoints.

##### start ( optional )
used in conjunction with the `files` endpoint to indicate which file object, in the total file list available, to begin returning.

##### type ( optional )
used in conjunction with all endpoints, defaults to `all`.

#### request_headers ( get/post )
this object refers the `request_headers` object used by the [generic-request-options][request-headers-url] module, which is used internally by this module.

#### api-endpoints
api-endpoints available can be found in the [get-api-endpoint.js][types] file and refer to the `Sub-item Access` section of the [internet archive metadata api][ia-api-url] documentation. 

the colon prefixed terms in the api endpoint urls are replaced with matching user_options properties; e.g. `:identifier`, and `:index` would be replaced with values indicated in the `user_options` object.

```javascript
var user_options = {
  identifier: 'frenchenglishmed00gorduoft',
  index: 0,
  type: 'files_index'
};
```

### read( [user_options][, request_headers] )
```javascript
 * @param {Object} [user_options]
 * @param {Object} [request_options]
 * @returns {Promise.<{ body:string, response:IncomingMessage }>}
```

#### user_options ( read )
see [user_options ( get )](#user_options--get-)

#### request_headers ( read )
see [request_headers ( get/post )](#request_headers--getpost-)

#### basic ( read )
```javascript
var read = require( 'internet-archive-metadata-api' ).read;
var user_options = { identifier: 'frenchenglishmed00gorduoft' };

read( user_options )
  .then(
    /**
     *  {{ body:string, response:IncomingMessage }} result
     */
    function( result ) {
      var json = JSON.parse( result.body );
    }
  )
  .catch();
```

### postRequestOptions( [user_options][, request_headers] )
```javascript
 * @param {Object} [user_options]
 * @param {Object} [request_options]
 * @returns {Promise.<{ body:string, response:IncomingMessage }>}
```

#### user_options ( post )
```javascript
var user_options = {
  access: string,
  identifier: string,
  patch: string,
  secret: string,
  target: string
};
```

##### access ( required )
your ia-s3 access key, which can be obtained by logging into your internet archive account and [requesting an ia-s3 key][ia-s3-key-url].

##### identifier ( required )
determines which internet archive resource will be affected by the write.

##### patch ( required )
the updates you want to apply to the internet archive item indicated by the `identifier`. they should be a string containing an array of valid [json patches](https://tools.ietf.org/html/draft-ietf-appsawg-json-patch-02). for example:

```javascript
patch: '[ { "add": "/identifier", "value": "test-api" }, { "add": "/publisher", "value": "test-api" } ]'
```

##### secret ( required )
your ia-s3 secret key, which can be obtained by logging into your internet archive account and [requesting an ia-s3 key][ia-s3-key-url].

##### target ( required )
one of the following values:

* metadata
    * targets the metadata object for the item, which can be viewed at `http://archive.org/metadata/:identifier/metadata`; e.g., [http://archive.org/metadata/frenchenglishmed00gorduoft/metadata](http://archive.org/metadata/frenchenglishmed00gorduoft/metadata)
* files/:filename
    * targets the file metadata for the item indicated by the `identifier`
    * replace :filename with the filename you wish to affect
        * a list of available files; e.g., http://archive.org/metadata/frenchenglishmed00gorduoft/files
        * target the `frenchenglishmed00gorduoft_marc.xml` file by setting the target to `files/frenchenglishmed00gorduoft_marc.xml`
* other
    * targets the other object for the item, which can be viewed at `http://archive.org/metadata/:identifier/other`; e.g., [http://archive.org/metadata/frenchenglishmed00gorduoft/other](http://archive.org/metadata/frenchenglishmed00gorduoft/other)

### write( [user_options][, request_headers] )
```javascript
 * @param {Object} [user_options]
 * @param {Object} [request_options]
 * @returns {Promise.<{ body:string, response:IncomingMessage }>}
```

#### user_options ( write )
see [user_options ( post )](#user_options--post-)

#### request_headers ( write )
see [request_headers ( get/post )](#request_headers--getpost-)

#### basic ( write )
```javascript
var write = require( 'internet-archive-metadata-api' ).write;

var user_options = {
  access: '<your-ia-s3-access-token>',
  identifier: 'test-api',
  patch: '[ { "add": "/identifier", "value": "test-api" } ]',
  secret: '<your-ia-s3-secret>',
  target: 'metadata'
};

write( user_options )
  .then(
    /**
     *  {{ body:string, response:IncomingMessage }} result
     */
    function( result ) {
      var json = JSON.parse( result.body );
    }
  )
  .catch();
```

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/dan-nl/internet-archive-metadata-api/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/dan-nl/internet-archive-metadata-api?branch=master
[david-dm-image]: https://david-dm.org/dan-nl/internet-archive-metadata-api.svg
[david-dm-url]: https://david-dm.org/dan-nl/internet-archive-metadata-api
[david-dm-dev-image]: https://david-dm.org/dan-nl/internet-archive-metadata-api/dev-status.svg
[david-dm-dev-url]: https://david-dm.org/dan-nl/internet-archive-metadata-api?type=dev
[ia-api-url]: http://blog.archive.org/2013/07/04/metadata-api/
[ia-s3-key-url]: http://archive.org/account/s3.php
[mit-license]: https://raw.githubusercontent.com/dan-nl/internet-archive-metadata-api/master/license.txt
[npm-image]: https://img.shields.io/npm/v/internet-archive-metadata-api.svg
[npm-url]: https://www.npmjs.com/package/internet-archive-metadata-api
[nsp-image]: https://nodesecurity.io/orgs/githubdan-nl/projects/f1c45296-b9f5-47da-9c57-6588aa6b2d4c/badge
[nsp-url]: https://nodesecurity.io/orgs/githubdan-nl/projects/f1c45296-b9f5-47da-9c57-6588aa6b2d4c
[request-as-bluebird-url]: https://github.com/dan-nl/request-as-bluebird
[request-headers-url]: https://github.com/dan-nl/generic-request-options#request_headers
[travis-image]: https://travis-ci.org/dan-nl/internet-archive-metadata-api.svg?branch=master
[travis-url]: https://travis-ci.org/dan-nl/internet-archive-metadata-api
[types]: https://raw.githubusercontent.com/dan-nl/internet-archive-metadata-api/master/src/helpers/get-api-endpoint.js
