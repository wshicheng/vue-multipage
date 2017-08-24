module.exports = function(env) {
    return require(`./configuration/webpack.${env}.js`)
  }