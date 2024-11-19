import { render, screen } from '@testing-library/react';
import { ContributionsContainer } from './ContributionsContainer';
import { useContributions } from '@/hooks/useContributions';

jest.mock('@/hooks/useContributions');

describe('ContributionsContainer', () => {
  const mockUseContributions = {
    contributions: [],
    total: 0,
    isLoading: false,
    error: null,
    searchQuery: '',
    currentPage: 1,
    setCurrentPage: jest.fn(),
    handleSearch: jest.fn()
  };

  beforeEach(() => {
    (useContributions as jest.Mock).mockReturnValue(mockUseContributions);
  });

  it('renders loading state', () => {
    (useContributions as jest.Mock).mockReturnValue({
      ...mockUseContributions,
      isLoading: true
    });
    
    render(<ContributionsContainer />);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('renders contributions', () => {
    (useContributions as jest.Mock).mockReturnValue({
      ...mockUseContributions,
      contributions: [{
        id: 1,
        title: 'Test',
        description: 'Test desc',
        startTime: '2024-05-27T06:00:00Z',
        endTime: '2024-05-27T07:00:00Z',
        owner: 'Test Owner'
      }],
      total: 1
    });
    
    render(<ContributionsContainer />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});