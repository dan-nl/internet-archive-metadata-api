'use strict';

/**
 * module variables
 */
var endpoints = {
  all: 'https://archive.org/metadata/:identifier',
  collection: 'https://archive.org/metadata/:identifier/metadata/collection',
  collection_index: 'https://archive.org/metadata/:identifier/metadata/collection/:index',
  files: 'https://archive.org/metadata/:identifier/files',
  files_count: 'https://archive.org/metadata/:identifier/files_count',
  files_index: 'https://archive.org/metadata/:identifier/files/:index/name',
  metadata: 'https://archive.org/metadata/:identifier/metadata',
  server: 'https://archive.org/metadata/:identifier/server',
  title: 'https://archive.org/metadata/:identifier/metadata/title'
};

/**
 * @param {string} type
 * @returns {string|undefined}
 */
function getApiEndpoint( type ) {
  return endpoints[ type ];
}

module.exports = getApiEndpoint;
