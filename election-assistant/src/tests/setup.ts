import '@testing-library/jest-dom';
import { vi } from 'vitest';

// JSDOM provides a working localStorage, no need to mock manually
// unless we want to track calls specifically.
