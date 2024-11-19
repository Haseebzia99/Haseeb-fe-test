import '@testing-library/jest-dom';

const originalConsoleError = console.error;
console.error = (...args: any[]) => {
  if (args[0]?.includes?.('ReactDOMTestUtils')) return;
  if (args[0]?.includes?.('not wrapped in act')) return;
  originalConsoleError(...args);
};