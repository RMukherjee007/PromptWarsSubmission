const BASE_URL = 'https://election-backend-883918498227.us-central1.run.app/api';

/**
 * Communicates with the Gemini AI backend for election queries.
 * @param {string} message - The user's question.
 * @returns {Promise<Object>} The AI's response text.
 */
export const chatWithAI = async (message) => {
  const response = await fetch(`${BASE_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  });
  return response.json();
};

/**
 * Fetches synthesized candidate data from the backend.
 * @param {string} name - The name of the candidate.
 * @returns {Promise<Object>} The candidate's biography and career data.
 */
export const fetchCandidate = async (name) => {
  const response = await fetch(`${BASE_URL}/candidate/${encodeURIComponent(name)}`);
  return response.json();
};
