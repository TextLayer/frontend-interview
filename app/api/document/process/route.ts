import { NextRequest } from 'next/server'

const BASE_URL = 'https://core.dev.textlayer.ai/v1'

// Document upload and processing endpoint - proxies to TextLayer API
export async function POST(request: NextRequest) {
  try {
    // TODO: Forward multipart/form-data to TextLayer API
    // TODO: Handle authentication if required
    // TODO: Add file validation before forwarding
    // TODO: Handle TextLayer API response format
    
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return Response.json(
        { success: false, status: 400, error: 'No file provided' },
        { status: 400 }
      )
    }
    
    // Forward to TextLayer API
    const response = await fetch(`${BASE_URL}/actions/process/document`, {
      method: 'POST',
      headers: {
        // TODO: Add authentication headers if required
        // 'Authorization': `Bearer ${process.env.TEXTLAYER_API_KEY}`,
      },
      body: formData,
    })
    
    if (!response.ok) {
      throw new Error(`TextLayer API error: ${response.status}`)
    }
    
    const data = await response.json()
    return Response.json(data)
    
  } catch (error) {
    console.error('Document processing error:', error)
    return Response.json(
      { success: false, status: 500, error: 'Internal server error' },
      { status: 500 }
    )
  }
} 