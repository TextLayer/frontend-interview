'use client'

import type { ChatMessage } from '@/types/chat'

interface ChatMessageProps {
  message: ChatMessage
}

export default function ChatMessage({ message }: ChatMessageProps) {
  // TODO: Implement message display
  // TODO: Handle streaming text effect for assistant messages
  // TODO: Style user vs assistant messages differently
  // TODO: Add timestamp display
  // TODO: Add message actions (copy, regenerate)

  return (
    <div>
      {/* TODO: Implement message UI */}
      <p>Message component - implement me!</p>
    </div>
  )
} 