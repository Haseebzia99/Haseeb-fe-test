import { renderHook } from '@testing-library/react';
import { useContributions } from './useContributions';
import { fetchContributions } from '@/services/api';
import { waitFor } from '@testing-library/react';

jest.mock('@/services/api');

describe('useContributions', () => {
  const mockData = {
    contributions: [{ id: 1, title: 'Test' }],
    total: 1,
  };

  beforeEach(() => {
    (fetchContributions as jest.Mock).mockResolvedValue(mockData);
  });

  it('fetches contributions on mount', async () => {
    const { result } = renderHook(() => useContributions());
    expect(result.current.isLoading).toBe(true);
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.contributions).toEqual(mockData.contributions);
  });

  it('handles search', async () => {
    const { result } = renderHook(() => useContributions());
    await result.current.handleSearch('test');

    await waitFor(() => {
      expect(fetchContributions).toHaveBeenCalledWith(
        expect.objectContaining({
          title: 'test',
          owner: 'test',
          skip: 0,  
          limit: 14,
        })
      );
    });
  });
});
