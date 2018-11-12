const dev = process.env.NODE_ENV !== 'production';
const assetPrefix = dev ? '' : '/react-spring-playground/';
const withSass = require('@zeit/next-sass');


module.exports = withSass(({
  assetPrefix,
  publicRuntimeConfig: {
    assetPrefix
  }
}))