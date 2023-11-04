// eslint-disable-next-line node/no-missing-require
const Converter = require('api-spec-converter');

Converter.convert(
  {
    from: 'swagger_1',
    to: 'swagger_2',
    source: 'https://api.gettyimages.com/swagger/api-docs',
  },
  function (err, converted) {
    console.log(converted.stringify());
    // For yaml and/or OpenApi field order output replace above line
    // with an options object like below
    //   var  options = {syntax: 'yaml', order: 'openapi'}
    //   console.log(converted.stringify(options));
  }
);
