const BASE_URL = 'http://localhost:5001/api';

export const chatWithAI = async (message) => {
  const response = await fetch(`${BASE_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  });
  return response.json();
};

export const fetchCandidate = async (name) => {
  const response = await fetch(`${BASE_URL}/candidate/${encodeURIComponent(name)}`);
  return response.json();
};
