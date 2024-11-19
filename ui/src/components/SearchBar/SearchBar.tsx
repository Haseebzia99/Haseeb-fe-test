import { Search } from 'lucide-react';
import { debounce } from 'lodash';

interface SearchBarProps {
  value: string;
  onChange: (searchTerm: string) => void;
 }
 
 export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const debouncedOnChange = debounce(onChange, 300);
 
  return (
    <div className="relative mb-8">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Search by title or owner..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        defaultValue={value}
        onChange={(e) => debouncedOnChange(e.target.value)}
      />
    </div>
  );
 };