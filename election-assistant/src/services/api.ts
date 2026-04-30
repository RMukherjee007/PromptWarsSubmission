const BASE_URL = 'https://election-backend-883918498227.us-central1.run.app/api';

interface ChatResponse {
  text: string;
  error?: string;
}

interface CandidateData {
  name: string;
  bio: string;
  career: string;
  facts: string[];
  error?: string;
}

/**
 * Communicates with the Gemini AI backend for election queries.
 */
export const chatWithAI = async (message: string): Promise<ChatResponse> => {
  const response = await fetch(`${BASE_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  });
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

/**
 * Fetches synthesized candidate data from the backend.
 */
export const fetchCandidate = async (name: string): Promise<CandidateData> => {
  const response = await fetch(`${BASE_URL}/candidate/${encodeURIComponent(name)}`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};
