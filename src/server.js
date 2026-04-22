/**
 * This file is the entry point for serving the Express application. It imports the app instance from index.js, sets up the server to listen on a specified port and host, and logs the server's address and port once it's running. The server configuration can be customized using environment variables for flexibility in different deployment environments.
 */

import app from './index.js'
import consola from 'consola'

const APP_PORT = process.env.APP_PORT || 3000
const APP_HOST = process.env.APP_HOST || '0.0.0.0'

const server = app.listen(APP_PORT, APP_HOST, () => {
  const addressInfo = server.address()
  consola.log(`Bound to: ${addressInfo.address} on port ${addressInfo.port}`)
  consola.success(`Server is running on http://${APP_HOST}:${APP_PORT}`)
})
