import app from './index.js'
import consola from 'consola'

const APP_PORT = process.env.APP_PORT || 3000
const APP_HOST = process.env.APP_HOST || '0.0.0.0'

const server = app.listen(APP_PORT, APP_HOST, () => {
  const addressInfo = server.address()
  consola.log(`Bound to: ${addressInfo.address} on port ${addressInfo.port}`)
  consola.success(`Server is running on http://${APP_HOST}:${APP_PORT}`)
})
