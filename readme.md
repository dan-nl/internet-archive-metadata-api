# internet-archive-metadata-api
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][david-dm-image]][david-dm-url] [![Dev Dependency Status][david-dm-dev-image]][david-dm-dev-url] [![NSP Status][nsp-image]][nsp-url]

[internet archive metadata api][ia-api-url] helper methods

## table of contents
* [installation](#installation)
* [use](#use)
    * [getRequestOptions( user_options, request_options )](#getrequestoptions-user_options-request_headers-)
    * [read( user_options, request_options )](#read-user_options-request_headers-)
    * [user_options](#user_options)
        * [count](#count)
        * [identifier](#identifier)
        * [index](#index)
        * [start](#start)
        * [type](#type)
    * [request-headers](#request_headers)
    * [api-endpoints](#api-endpoints)
    * [basic](#basic)
* [license](#license)

## installation
```javascript
npm install internet-archive-metadata-api
```

## use
`read` is the “intended” method to be used, however, `getRequestOptions` is also exposed for those that would rather initiate the request in a different manner than this module does with [request-as-bluebird][request-as-bluebird-url].
 
### getRequestOptions( [user_options][, request_headers] )
```javascript
 * @param {Object} [user_options]
 * @param {Object} [request_options]
 * @returns {Promise.<{ body:string, response:IncomingMessage }>}
```

### read( [user_options][, request_headers] )
```javascript
 * @param {Object} [user_options]
 * @param {Object} [request_options]
 * @returns {Promise.<{ body:string, response:IncomingMessage }>}
```

### user_options
```javascript
var user_options = {
  count: number,
  identifier: string,
  index: number,
  start: number
  type: string
};
```

#### count
_optionally_ used in conjunction with the `files` endpoint to indicate the limit of file objects returned.

#### identifier
___required___ in conjunction with all endpoints to determine which resource to retrieve.

#### index
_optionally_ used in the `collection_index` and `files_index` endpoints.

#### start
_optionally_ used in conjunction with the `files` endpoint to indicate which file object, in the total file list available, to begin returning.

#### type
_optionally_ used in conjunction with all endpoints, defaults to `all`.

### request_headers
this object refers the `request_headers` object used by the [generic-request-options][request-headers-url] module, which is used internally by this module.

### api-endpoints
api-endpoints available can be found in the [get-api-endpoint.js][types] file and refer to the `Sub-item Access` section of the [internet archive metadata api][ia-api-url] documentation. 

the colon prefixed terms in the api endpoint urls are replaced with matching user_options properties; e.g. `:identifier`, and `:index` would be replaced with values indicated in the `user_options` object.
```javascript
var user_options = {
  identifier: 'frenchenglishmed00gorduoft',
  index: 0,
  type: 'files_index'
};
```

### basic
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

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/dan-nl/internet-archive-metadata-api/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/dan-nl/internet-archive-metadata-api?branch=master
[david-dm-image]: https://david-dm.org/dan-nl/internet-archive-metadata-api.svg
[david-dm-url]: https://david-dm.org/dan-nl/internet-archive-metadata-api
[david-dm-dev-image]: https://david-dm.org/dan-nl/internet-archive-metadata-api/dev-status.svg
[david-dm-dev-url]: https://david-dm.org/dan-nl/internet-archive-metadata-api?type=dev
[ia-api-url]: http://blog.archive.org/2013/07/04/metadata-api/
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
