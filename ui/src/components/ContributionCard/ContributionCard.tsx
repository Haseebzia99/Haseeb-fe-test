import { format } from 'date-fns';
import type { Contribution } from '@/types';

interface ContributionCardProps {
  contribution: Contribution;
}

export const ContributionCard: React.FC<ContributionCardProps> = ({ contribution }) => {
  const getStatus = (startTime: string, endTime: string) => {
    const now = new Date();
    const start = new Date(startTime);
    const end = new Date(endTime);

    if (now < start) return { text: 'Scheduled', color: 'bg-blue-100 text-blue-800' };
    if (now > end) return { text: 'Complete', color: 'bg-gray-100 text-gray-800' };
    return { text: 'Active', color: 'bg-green-100 text-green-800' };
  };

  const status = getStatus(contribution.startTime, contribution.endTime);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">{contribution.title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ml-2 ${status.color}`}>
            {status.text}
          </span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{contribution.description}</p>
        <div className="space-y-2">
          <p className="text-sm text-gray-500">
            <span className="font-medium">Start:</span> {format(new Date(contribution.startTime), 'PPp')}
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">End:</span> {format(new Date(contribution.endTime), 'PPp')}
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Owner:</span> {contribution.owner}
          </p>
        </div>
      </div>
    </div>
  );
};