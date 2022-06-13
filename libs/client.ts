import { createClient } from 'microcms-js-sdk'
export const client = createClient({
  serviceDomain: 'ydcogaf5r2',
  apiKey: process.env.API_KEY || '',
})