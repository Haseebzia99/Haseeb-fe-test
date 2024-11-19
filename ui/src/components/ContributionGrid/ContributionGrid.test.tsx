import { render, screen } from '@testing-library/react';
import { ContributionGrid } from './ContributionGrid';

const mockContributions = [
  {
    id: 1,
    title: 'Test Title 1',
    description: 'Test Description 1',
    startTime: '2024-05-27T06:00:00Z',
    endTime: '2024-05-27T07:00:00Z',
    owner: 'Test Owner 1'
  },
  {
    id: 2,
    title: 'Test Title 2',
    description: 'Test Description 2',
    startTime: '2024-05-27T07:00:00Z',
    endTime: '2024-05-27T08:00:00Z',
    owner: 'Test Owner 2'
  }
];

describe('ContributionGrid', () => {
  it('renders all contributions', () => {
    render(<ContributionGrid contributions={mockContributions} />);
    
    expect(screen.getByText('Test Title 1')).toBeInTheDocument();
    expect(screen.getByText('Test Title 2')).toBeInTheDocument();
  });

  it('renders empty grid when no contributions', () => {
    render(<ContributionGrid contributions={[]} />);
    expect(screen.queryByRole('article')).not.toBeInTheDocument();
  });
});