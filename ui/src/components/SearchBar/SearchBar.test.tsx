import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SearchBar } from './SearchBar';

jest.mock('lodash', () => ({
  ...jest.requireActual('lodash'),
  debounce: (fn: (value: string) => void) => fn,
}));

describe('SearchBar', () => {
  it('renders search input', () => {
    const mockOnChange = jest.fn();
    render(<SearchBar value="" onChange={mockOnChange} />);
    
    const input = screen.getByPlaceholderText(/search by title or owner/i);
    expect(input).toBeInTheDocument();
  });

  it('calls onChange with input value', async () => {
    const mockOnChange = jest.fn();
    render(<SearchBar value="" onChange={mockOnChange} />);
    
    const input = screen.getByPlaceholderText(/search by title or owner/i);
    fireEvent.change(input, { target: { value: 'test search' } });
    
    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith('test search');
    });
  });

  it('displays the provided value', () => {
    const mockOnChange = jest.fn();
    render(<SearchBar value="test value" onChange={mockOnChange} />);
    
    const input = screen.getByPlaceholderText(/search by title or owner/i) as HTMLInputElement;
    expect(input.value).toBe('test value');
  });
});
