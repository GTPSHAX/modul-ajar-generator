import app from './index.js'
import consola from 'consola'

const server = app.listen(3000, '0.0.0.0', () => {
  const addressInfo = server.address()
  consola.log(`Bound to: ${addressInfo.address} on port ${addressInfo.port}`)
  consola.success('Server is running on http://localhost:3000')
})
