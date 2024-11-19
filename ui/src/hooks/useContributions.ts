import { useState, useEffect } from 'react';
import { fetchContributions } from '@/services/api';
import { Contribution } from '@/types';

export const useContributions = (itemsPerPage: number = 14) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<{
    contributions: Contribution[];
    total: number;
  }>({ contributions: [], total: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContributions = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const result = await fetchContributions({
          skip: (currentPage - 1) * itemsPerPage,
          limit: itemsPerPage,
          title: searchQuery,
          owner: searchQuery
        });
        
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    loadContributions();
  }, [searchQuery, currentPage, itemsPerPage]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  return {
    contributions: data.contributions,
    total: data.total,
    isLoading,
    error,
    searchQuery,
    currentPage,
    setCurrentPage,
    handleSearch
  };
};