import { NextRequest } from 'next/server'
import type { StreamingChatRequest } from '@/types/chat'

const BASE_URL = 'https://core.dev.textlayer.ai/v1'

// Chat endpoint - proxies to TextLayer API
export async function POST(request: NextRequest) {
  try {
    const body: StreamingChatRequest = await request.json()
    
    // TODO: Forward request to TextLayer API
    // TODO: Add proper error handling
    // TODO: Transform response if needed
    
    const response = await fetch(`${BASE_URL}/threads/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    
    if (!response.ok) {
      throw new Error(`TextLayer API error: ${response.status}`)
    }
    
    const data = await response.json()
    return Response.json(data)
    
  } catch (error) {
    console.error('Chat API error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 