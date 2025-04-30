# InsightAI Chatbot

A Retrieval-Augmented Generation (RAG) chatbot built using n8n, OpenAI, Pinecone, and Netlify, designed to provide conversational responses grounded in factual context. The chatbot is tailored for the Vijay Social Welfare Society (VSWS), an NGO focused on social initiatives in India.

Live Site: [https://insight-ai-chat.netlify.app/](https://insight-ai-chat.netlify.app/)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [n8n Workflow Architecture](#n8n-workflow-architecture)
- [Frontend Setup](#frontend-setup)
- [Deployment](#deployment)
- [Limitations & Future Roadmap](#limitations--future-roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

InsightAI uses the Retrieval-Augmented Generation (RAG) method to combine contextual document retrieval with generative AI. The chatbot is hosted on Netlify, while the backend logic runs through a custom n8n workflow deployed on Render. It retrieves relevant context from the VSWS Annual Report and crafts factual responses using a GPT model served via OpenRouter.

---

## Tech Stack

- **Frontend**: React.js
- **Backend Orchestration**: n8n (self-hosted)
- **LLM Provider**: GPT-4 via OpenRouter
- **Embedding Model**: OpenAI Embeddings (via HTTP node)
- **Vector Store**: Pinecone
- **Deployment Platforms**: Netlify (frontend), Render (backend)

---

## How It Works

1. **User Input**: The user submits a query from the frontend React app.
2. **Webhook Trigger (n8n)**: n8n receives the input via a Webhook node.
3. **Pre-processing**: Trims the input and validates it; if empty, a fallback message is injected.
4. **Session Management**: A unique session ID is assigned using a UUID node.
5. **Embedding Generation**: The query is sent to OpenAI’s embedding API via an HTTP node.
6. **Vector Search (Pinecone)**: Embeddings are used to query Pinecone and retrieve top-k matching context chunks.
7. **Prompt Assembly**: The context chunks are formatted and injected into a structured prompt.
8. **Completion (OpenRouter)**: The prompt is sent to OpenRouter’s GPT-4 endpoint for response generation.
9. **Response Delivery**: The generated answer is returned via a Webhook response to the frontend.

---

## n8n Workflow Architecture

### 1. Webhook (Trigger Node)
Receives `POST` requests from the frontend with user input.

### 2. Function Node (Preprocessing)
Trims whitespace and checks for empty queries; assigns fallback if needed.

### 3. UUID Node (Session ID)
Generates a unique identifier to group the session’s queries.

### 4. HTTP Node (Embedding Generation)
Calls OpenAI’s Embeddings API to vectorize the user's query.

### 5. HTTP Node (Pinecone Vector Search)
Sends embedding to Pinecone and retrieves top-k relevant document chunks.

### 6. Function Node (Prompt Construction)
Formats retrieved chunks into a clean prompt, along with the original question.

### 7. HTTP Node (LLM Completion)
Calls OpenRouter’s GPT-4 endpoint to generate a contextual response.

### 8. Respond to Webhook
Sends the structured response back to the frontend in JSON format.

---

## Frontend Setup

Built using React.js and deployed on Netlify.

### Key Components:
- **Chat.js**: Handles user input and displays chatbot responses.
- **axios**: Used to post queries to n8n’s Webhook endpoint.

Ensure `react-scripts` is included in `package.json` for builds:

```bash
npm install react-scripts --save-dev
```

---

## Deployment

### Frontend (Netlify)
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `build`

### Backend (Render)
1. Create a Web Service
2. Connect GitHub repo containing the n8n instance
3. Add environment variables (e.g., `OPENAI_API_KEY`, `PINECONE_API_KEY`, `OPENROUTER_API_KEY`, `PINECONE_ENV`, `PINECONE_INDEX`)
4. Build command: `npm install && npm run build`
5. Start command: `npm start`

---

## Limitations & Future Roadmap

### Limitations
- Render free tier sleeps after inactivity
- No session memory or chat history
- Single-document scope (VSWS annual report)

### Roadmap
- Support for multiple document types and sources
- Session-based memory and history
- Admin dashboard for content upload and moderation
- Feedback system for tuning prompt performance
- Authentication and user management
- Enhanced UI/UX (typing animation, avatars, smart fallback responses)
- Query logging and analytics dashboard

---

## Contributing

Pull requests are welcome. For significant changes, open an issue first to propose modifications.

---

## License

[MIT](https://choosealicense.com/licenses/mit/)
