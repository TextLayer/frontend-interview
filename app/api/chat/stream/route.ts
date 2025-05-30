import { NextRequest } from 'next/server'
import type { StreamingChatRequest } from '@/types/chat'

const BASE_URL = 'https://core.dev.textlayer.ai/v1'

// Streaming chat endpoint - proxies to TextLayer API
export async function POST(request: NextRequest) {
  try {
    const body: StreamingChatRequest = await request.json()
    
    // TODO: Forward streaming request to TextLayer API
    // TODO: Handle authentication if required
    // TODO: Implement proper streaming response handling
    // TODO: Add error handling for streaming failures
    
    const response = await fetch(`${BASE_URL}/threads/chat/stream`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // TODO: Add authentication headers if required
        // 'Authorization': `Bearer ${process.env.TEXTLAYER_API_KEY}`,
      },
      body: JSON.stringify(body),
    })
    
    if (!response.ok) {
      throw new Error(`TextLayer API error: ${response.status}`)
    }
    
    // Forward the streaming response
    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      },
    })
    
  } catch (error) {
    console.error('Streaming chat API error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 