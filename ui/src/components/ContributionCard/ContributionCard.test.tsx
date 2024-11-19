import { render, screen} from '@testing-library/react';
import { ContributionCard } from './ContributionCard';

const mockContribution = {
  id: 1,
  title: 'Test Title',
  description: 'Test Description',
  startTime: '2024-05-27T06:00:00Z',
  endTime: '2024-05-27T07:00:00Z',
  owner: 'Test Owner'
};

describe('ContributionCard', () => {
  it('renders contribution details', () => {
    render(<ContributionCard contribution={mockContribution} />);
    
    expect(screen.getByText(mockContribution.title)).toBeInTheDocument();
    expect(screen.getByText(mockContribution.description)).toBeInTheDocument();
    expect(screen.getByText(/test owner/i)).toBeInTheDocument();
  });

  it('displays correct status based on time', () => {
    const now = new Date('2024-05-27T06:30:00Z');
    jest.useFakeTimers().setSystemTime(now);

    render(<ContributionCard contribution={mockContribution} />);
    expect(screen.getByText('Active')).toBeInTheDocument();
    
    jest.useRealTimers();
  });
});