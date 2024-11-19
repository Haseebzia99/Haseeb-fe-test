const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const fetchContributions = async (params: {
 skip?: number;
 limit?: number;
 title?: string;
 owner?: string;
}) => {
  const searchParams = new URLSearchParams();
  if (params.skip) searchParams.set('skip', params.skip.toString());
  if (params.limit) searchParams.set('limit', params.limit.toString());
  if (params.title) {
    searchParams.set('title', params.title);
    searchParams.set('owner', params.title);
    searchParams.set('match', 'any');
  }
 const response = await fetch(
   `${API_BASE_URL}/contributions?${searchParams}`,
   {
     headers: {
       'Content-Type': 'application/json',
     },
   }
 );

 if (!response.ok) {
   throw new Error('Failed to fetch contributions');
 }
 return response.json();
};