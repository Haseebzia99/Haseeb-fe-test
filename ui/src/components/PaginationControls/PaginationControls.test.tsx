import { render, screen, fireEvent } from '@testing-library/react';
import { PaginationControls } from './PaginationControls';

describe('PaginationControls', () => {
  const defaultProps = {
    currentPage: 2,
    totalPages: 5,
    onPageChange: jest.fn(),
  };

  it('renders pagination buttons', () => {
    render(<PaginationControls {...defaultProps} />);
    expect(screen.getByLabelText('Previous page')).toBeInTheDocument();
    expect(screen.getByLabelText('Next page')).toBeInTheDocument();
  });

  it('handles previous page click', () => {
    render(<PaginationControls {...defaultProps} />);
    fireEvent.click(screen.getByLabelText('Previous page'));
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(1);
  });
});