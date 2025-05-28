'use client'

interface DocumentUploadProps {
  onDocumentUpload: (file: File) => Promise<void>
  isUploading?: boolean
}

export default function DocumentUpload({ onDocumentUpload, isUploading }: DocumentUploadProps) {
  // TODO: Implement file input state
  // TODO: Handle file selection and validation (PDF only)
  // TODO: Show upload progress/loading state
  // TODO: Handle drag and drop functionality
  // TODO: Display file size limits and validation errors

  return (
    <div>
      {/* TODO: Implement document upload UI */}
      <p>Document upload component - implement me!</p>
    </div>
  )
} 