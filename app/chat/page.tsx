'use client'

import * as React from 'react'
import { useState } from 'react'
import type { ChatMessage, DocumentAnalysis } from '@/types/chat'

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [documentContent, setDocumentContent] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<DocumentAnalysis | null>(null)

  // TODO: Implement document analysis
  const analyzeDocument = async () => {
    // Call /api/analyze
  }

  // TODO: Implement streaming chat
  const sendMessage = async (message: string) => {
    // Call /api/chat with streaming response
  }

  return (
    <div className="max-w-4xl mx-auto p-4 h-screen flex flex-col">
      {/* TODO: Document upload section */}
      
      {/* TODO: Document analysis display */}
      
      {/* TODO: Chat messages list */}
      
      {/* TODO: Message input */}
      
      <div className="text-center text-gray-500 mt-8">
        <h1 className="text-2xl font-bold mb-4">AI Document Chat Interface</h1>
        <p className="mb-2">This is your technical interview skeleton.</p>
        <p className="text-sm">Complete the TODOs to build the chat interface.</p>
      </div>
    </div>
  )
} 