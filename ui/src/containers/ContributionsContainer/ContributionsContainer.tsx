import { SearchBar } from '@/components/SearchBar/SearchBar';
import { ContributionGrid } from '@/components/ContributionGrid/ContributionGrid';
import { PaginationControls } from '@/components/PaginationControls/PaginationControls';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useContributions } from '@/hooks/useContributions';

const ITEMS_PER_PAGE = 14;

export const ContributionsContainer = () => {
  const {
    contributions,
    total,
    isLoading,
    error,
    searchQuery,
    currentPage,
    setCurrentPage,
    handleSearch
  } = useContributions(ITEMS_PER_PAGE);

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SearchBar
          value={searchQuery}
          onChange={handleSearch}
        />
        
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 data-testid="loading-spinner" className="h-8 w-8 animate-spin text-gray-400" />
          </div>
        ) : (
          <>
            <ContributionGrid contributions={contributions} />
            
            {total > ITEMS_PER_PAGE && (
              <PaginationControls 
                currentPage={currentPage}
                totalPages={Math.ceil(total / ITEMS_PER_PAGE)}
                onPageChange={setCurrentPage}
              />
            )}
            
            {contributions.length === 0 && !error && (
              <p className="text-center text-gray-500 mt-8">
                No contributions found
              </p>
            )}
          </>
        )}
      </div>
    </main>
  );
};