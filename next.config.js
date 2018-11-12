// const withSass = require('@zeit/next-sass');

module.exports = {
  withSass: require('@zeit/next-sass'),
  assetPrefix: process.env.NODE_ENV === 'production' ? '/react-spring-playground' : '',
};