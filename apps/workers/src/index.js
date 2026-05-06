import handleAutoFillAI from '@repo/handlers/handle-autofill-ai.js'
import handleGenerateDocx from '@repo/handlers/handle-generate-docx.js'

/**
 * @typedef {Object} ResultOfHandler
 * @property {number} status - The HTTP status code to return in the response
 * @property {string | undefined} [data] - The data to include in the response body
 * @property {string | undefined} [message] - A message to include in the response body
 */

export default {
  /**
   * @param {Request} request
   * @param {any} env
   * @param {ExecutionContext} ctx
   */
  async fetch (request, env, ctx) {
    const url = new URL(request.url)

    if (request.method === 'POST') {
      try {
        const body = await request.json()
        /** @type {ResultOfHandler} */
        let result = {
          status: 500,
          data: undefined,
          message: 'Something went wrong. Please try again later.'
        }

        console.debug('Received request with body:', body)

        if (url.pathname === '/api/autofill-ai') {
          result = await handleAutoFillAI(body)
        } else if (url.pathname === '/api/generate-docx') {
          result = await handleGenerateDocx(body)
        } else {
          return new Response('Not Found', { status: 404 })
        }

        return new Response(result.data ?? result.message, { status: result.status })
      } catch (/** @type {Error | unknown} */ error) {
        console.error('Error occurred while processing request:', error)
        return new Response('Internal Server Error', { status: 500 })
      }
    }
  }
}
