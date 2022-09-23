import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import { fetch } from 'cross-fetch';

// Add `fetch` polyfill.
global.fetch = fetch;

expect.extend(matchers);