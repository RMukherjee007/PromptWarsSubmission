import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useChecklist } from '../hooks/useChecklist';

describe('useChecklist', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should initialize with default tasks', () => {
    const { result } = renderHook(() => useChecklist());
    expect(result.current.tasks.length).toBe(6);
    expect(result.current.progress).toBe(0);
  });

  it('should toggle task completion', () => {
    const { result } = renderHook(() => useChecklist());
    act(() => {
      result.current.toggleTask(1);
    });
    expect(result.current.tasks[0].completed).toBe(true);
    expect(result.current.progress).toBeGreaterThan(0);
  });

  it('should persist to localStorage', () => {
    const { result } = renderHook(() => useChecklist());
    act(() => {
      result.current.toggleTask(1);
    });
    const saved = JSON.parse(localStorage.getItem('election-tasks') || '[]');
    expect(saved[0].completed).toBe(true);
  });
});
