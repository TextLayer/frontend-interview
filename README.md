# Frontend AI Engineer Technical Interview

## Overview

Welcome to your technical interview! You have **90 minutes** to complete this challenge:
- **60 minutes**: Coding implementation
- **30 minutes**: Discussion of your solution

## The Challenge: AI Document Chat Interface

Build a conversational AI interface for enterprise document analysis. You'll create a chat interface that allows users to upload PDF documents and ask questions about them using AI.

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (package manager)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server with Turbopack
pnpm dev
```

Visit `http://localhost:3000` to see your application.

## Project Structure

```
├── app/
│   ├── chat/page.tsx           # Main chat interface (START HERE)
│   ├── api/
│   │   ├── chat/route.ts       # Non-streaming chat endpoint
│   │   ├── chat/stream/route.ts # Streaming chat endpoint  
│   │   ├── document/process/route.ts # Document upload
│   │   └── analyze/route.ts    # Document analysis
│   └── layout.tsx              # Root layout
├── components/
│   ├── ChatMessage.tsx         # Individual message component
│   ├── ChatInput.tsx          # Message input component
│   └── DocumentUpload.tsx     # Document upload component
├── types/chat.ts              # TypeScript definitions
└── lib/utils.ts               # Utility functions
```

## API Endpoints (Mock Implementation Provided)

### Document Upload
```
POST /api/document/process
Content-Type: multipart/form-data
Body: FormData with 'file' field
```

### Streaming Chat
```
POST /api/chat/stream
Content-Type: application/json
Body: { "messages": [{ "role": "user", "content": "question" }] }
```

### Regular Chat
```
POST /api/chat
Content-Type: application/json
Body: { "messages": [{ "role": "user", "content": "question" }] }
```

### Document Analysis
```
POST /api/analyze
Content-Type: application/json
```

## Implementation Tips

1. **Start with Level 1** - Get the basic functionality working first
2. **Use the provided types** - Everything is pre-typed in `types/chat.ts`
3. **Mock data is provided** - API endpoints return mock responses
4. **Focus on user experience** - Smooth interactions and good feedback
5. **Handle edge cases** - Empty states, errors, loading states

## Key Technologies

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Vercel AI SDK** for streaming (to be implemented)

## Need Help?

- Check the TODOs in each file for guidance
- API endpoints are already set up with mock responses
- Types are defined in `types/chat.ts`
- Utility functions are available in `lib/utils.ts`

Good luck! 🚀