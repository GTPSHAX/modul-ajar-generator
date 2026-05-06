import {
  env,
  createExecutionContext,
  waitOnExecutionContext
} from 'cloudflare:test'
import { describe, it, expect, vi } from 'vitest'
import worker from '../src/index.js'

vi.mock('@repo/handlers/handle-autofill-ai.js', () => {
  return {
    default: vi.fn().mockResolvedValue({
      status: 200,
      data: '{"result": "mocked auto fill"}',
      message: 'Success'
    })
  }
})

vi.mock('@repo/handlers/handle-generate-docx.js', () => {
  return {
    default: vi.fn().mockResolvedValue({
      status: 200,
      data: 'mocked docx buffer',
      message: 'Success'
    })
  }
})

describe('Workers User Worker', () => {
  describe('request for unknown route', () => {
    it('responds with 404 (unit style)', async () => {
      const request = new Request('http://example.com/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      })
      const ctx = createExecutionContext()
      const response = await worker.fetch(request, env, ctx)
      await waitOnExecutionContext(ctx)
      expect(response?.status).toBe(404)
      expect(await response?.text()).toBe('Not Found')
    })
  })

  describe('request for /autofill-ai', () => {
    it('responds with mocked data (unit style)', async () => {
      const request = new Request('http://example.com/autofill-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rppData: 'test' })
      })
      const ctx = createExecutionContext()
      const response = await worker.fetch(request, env, ctx)
      await waitOnExecutionContext(ctx)
      expect(response?.status).toBe(200)
      expect(await response?.text()).toBe('{"result": "mocked auto fill"}')
    })
  })

  describe('request for /generate-docx', () => {
    it('responds with mocked docx (unit style)', async () => {
      const request = new Request('http://example.com/generate-docx', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ template: 'test' })
      })
      const ctx = createExecutionContext()
      const response = await worker.fetch(request, env, ctx)
      await waitOnExecutionContext(ctx)
      expect(response?.status).toBe(200)
      expect(await response?.text()).toBe('mocked docx buffer')
    })
  })

  describe('GET request', () => {
    it('returns undefined (no response from fetch)', async () => {
      const request = new Request('http://example.com/generate-docx', {
        method: 'GET'
      })
      const ctx = createExecutionContext()
      const response = await worker.fetch(request, env, ctx)
      await waitOnExecutionContext(ctx)
      expect(response).toBeUndefined()
    })
  })
})
