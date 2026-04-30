import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import AIChatbot from '../components/AIChatbot';
import * as api from '../services/api';

// Mock the API service
vi.mock('../services/api', () => ({
  chatWithAI: vi.fn(),
}));

describe('AIChatbot Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the initial AI message', () => {
    render(<AIChatbot />);
    expect(screen.getByText(/Hello! I'm your Election Assistant/i)).toBeInTheDocument();
  });

  it('should send a message and display the AI response', async () => {
    const mockResponse = { text: 'The Electoral College is a process...' };
    (api.chatWithAI as Mock).mockResolvedValue(mockResponse);

    render(<AIChatbot />);
    
    const input = screen.getByPlaceholderText(/Ask a question/i);
    const button = screen.getByText(/Send/i);

    fireEvent.change(input, { target: { value: 'How does the electoral college work?' } });
    fireEvent.click(button);

    expect(screen.getByText(/How does the electoral college work?/i)).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText(/The Electoral College is a process/i)).toBeInTheDocument();
    });
  });

  it('should show error message on API failure', async () => {
    (api.chatWithAI as Mock).mockRejectedValue(new Error('API Error'));

    render(<AIChatbot />);
    
    const input = screen.getByPlaceholderText(/Ask a question/i);
    const button = screen.getByText(/Send/i);

    fireEvent.change(input, { target: { value: 'Test question' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/Connection error/i)).toBeInTheDocument();
    });
  });
});
