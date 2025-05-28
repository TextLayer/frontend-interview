export type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  isStreaming?: boolean
}

export type DocumentAnalysis = {
  summary: string
  keyTopics: string[]
  wordCount: number
}

export type ApiResponse<T> = {
  success: boolean
  status: number
  data?: T
  error?: string
}

export type StreamingChatRequest = {
  messages: Array<{
    role: string
    content: string
  }>
}

export type ChatResponse = {
  correlation_id: string
  payload: Array<{
    content: string
    finish_reason: string
    role: string
  }>
  status: number
} 