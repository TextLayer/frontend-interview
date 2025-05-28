import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// TODO: Add utility functions for:
// - Generating unique IDs for messages
// - Formatting timestamps
// - Handling file validation
// - Text streaming helpers

export function generateMessageId(): string {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9)
}

export function formatTimestamp(date: Date): string {
  // TODO: Implement proper timestamp formatting
  return date.toLocaleTimeString()
}

export function validateFileType(file: File): boolean {
  // TODO: Implement PDF file validation
  return file.type === 'application/pdf'
}

export function validateFileSize(file: File, maxSizeMB: number = 10): boolean {
  // TODO: Implement file size validation
  const maxSizeBytes = maxSizeMB * 1024 * 1024
  return file.size <= maxSizeBytes
} 