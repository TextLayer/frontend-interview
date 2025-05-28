'use client'

interface ChatInputProps {
  onSendMessage: (message: string) => Promise<void>
  disabled?: boolean
}

export default function ChatInput({ onSendMessage, disabled }: ChatInputProps) {
  // TODO: Implement message input state
  // TODO: Handle form submission
  // TODO: Add input validation (prevent empty messages)
  // TODO: Handle keyboard shortcuts (Enter to send, Shift+Enter for new line)
  // TODO: Show character limits
  // TODO: Disable input during loading states

  return (
    <div>
      {/* TODO: Implement input form */}
      <p>Chat input component - implement me!</p>
    </div>
  )
} 