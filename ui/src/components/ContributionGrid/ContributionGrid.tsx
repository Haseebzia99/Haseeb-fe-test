import type { Contribution } from '@/types';
import { ContributionCard } from '../ContributionCard/ContributionCard';

interface ContributionGridProps {
  contributions: Contribution[];
}

export const ContributionGrid: React.FC<ContributionGridProps> = ({ contributions }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {contributions.map((contribution) => (
      <ContributionCard key={contribution.id} contribution={contribution} />
    ))}
  </div>
);