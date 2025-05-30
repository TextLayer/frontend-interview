'use client'

import * as React from 'react'
import { useState } from 'react'
import type { ChatMessage } from '@/types/chat'

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isUploading, setIsUploading] = useState(false)

  // TODO: Implement document upload
  const handleDocumentUpload = async (file: File) => {
    // Call /api/document/process
  }

  // TODO: Implement streaming chat
  const sendMessage = async (message: string) => {
    // Call /api/chat/stream with streaming response
  }

  return (
    <div className="max-w-4xl mx-auto p-4 h-screen flex flex-col">
      {/* TODO: Document upload section */}
      
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