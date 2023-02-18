/* eslint-disable @typescript-eslint/no-var-requires */
const componentConfig = require('./config/component')
const pageConfig = require('./config/page')

module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
  plop.setGenerator('component', componentConfig)

  plop.setGenerator('page', pageConfig)

  // plop.setGenerator('util', utilConfig)

  // plop.setGenerator('hook', hookConfig)

  // plop.setGenerator('context', contextConfig)
}
