module.exports = {
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    publicPath: process.env.NODE_ENV === 'production'
    ? '/frontend-web-sda/'
    : '/'
}