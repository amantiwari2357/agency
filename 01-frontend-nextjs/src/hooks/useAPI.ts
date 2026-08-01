import { useState, useEffect, useCallback, useRef } from 'react';
import { API_ENDPOINTS, fetchAPI, postAPI, putAPI, deleteAPI } from '../config/api';

// Generic API hook for data fetching
export function useAPI<T>(
  endpoint: string,
  options?: {
    immediate?: boolean;
    dependencies?: any[];
  }
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mountedRef = useRef<boolean>(true);

  const fetchData = useCallback(async () => {
    if (!mountedRef.current) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetchAPI<T>(endpoint);
      if (mountedRef.current) {
        setData(response);
      }
    } catch (err) {
      if (mountedRef.current) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      }
    } finally {
      if (mountedRef.current) {
        setLoading(false);
      }
    }
  }, [endpoint]);

  useEffect(() => {
    if (options?.immediate !== false) {
      fetchData();
    }

    return () => {
      mountedRef.current = false;
    };
  }, [fetchData, options?.immediate, ...(options?.dependencies || [])]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch };
}

// Hook for POST requests
export function useCreate<T>(endpoint: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const create = useCallback(async (payload: any) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await postAPI<T>(endpoint, payload);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create resource';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  return { create, loading, error };
}

// Hook for PUT requests
export function useUpdate<T>(endpoint: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = useCallback(async (id: string, payload: any) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await putAPI<T>(`${endpoint}/${id}`, payload);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update resource';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  return { update, loading, error };
}

// Hook for DELETE requests
export function useDelete(endpoint: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const remove = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await deleteAPI(`${endpoint}/${id}`);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete resource';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  return { remove, loading, error };
}

// Hook for multiple API calls
export function useMultipleAPI<T>(endpoints: string[]) {
  const [data, setData] = useState<Record<string, T>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const fetchAll = useCallback(async () => {
    setLoading({});
    setErrors({});

    const results: Record<string, T> = {};
    const loadingStates: Record<string, boolean> = {};
    const errorStates: Record<string, string | null> = {};

    await Promise.all(
      endpoints.map(async (endpoint) => {
        const key = endpoint.replace(/\//g, '-');
        loadingStates[key] = true;
        setLoading({ ...loadingStates });

        try {
          const response = await fetchAPI<T>(endpoint);
          results[key] = response;
          errorStates[key] = null;
        } catch (err) {
          errorStates[key] = err instanceof Error ? err.message : 'Failed to fetch';
        } finally {
          loadingStates[key] = false;
          setLoading({ ...loadingStates });
          setErrors({ ...errorStates });
        }
      })
    );

    setData(results);
    setErrors(errorStates);
  }, [endpoints]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return { data, loading, errors, refetch: fetchAll };
}

// Hook for infinite scroll pagination
export function useInfiniteScroll<T>(endpoint: string, pageSize = 10) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    
    try {
      const response = await fetchAPI<{ data: T[]; hasMore: boolean }>(
        `${endpoint}?page=${page}&limit=${pageSize}`
      );
      
      if (response.hasMore === false) {
        setHasMore(false);
      }
      
      setData(prev => [...prev, ...response.data]);
      setPage(prev => prev + 1);
    } catch (err) {
      console.error('Failed to load more data:', err);
    } finally {
      setLoading(false);
    }
  }, [endpoint, page, pageSize, loading, hasMore]);

  const reset = useCallback(() => {
    setData([]);
    setPage(1);
    setHasMore(true);
  }, []);

  return { data, loading, hasMore, loadMore, reset };
}

// Hook for debounced API calls
export function useDebounceAPI<T>(endpoint: string, delay = 500) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedFetch = useCallback((query?: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setLoading(true);

    timeoutRef.current = setTimeout(async () => {
      try {
        const url = query ? `${endpoint}?q=${encodeURIComponent(query)}` : endpoint;
        const response = await fetchAPI<T>(url);
        setData(response);
      } catch (err) {
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    }, delay);
  }, [endpoint, delay]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { data, loading, debouncedFetch };
}

// Hook for cache-aware API calls
export function useCachedAPI<T>(endpoint: string, cacheKey: string, cacheTime = 5 * 60 * 1000) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (forceRefresh = false) => {
    const cached = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(`${cacheKey}-time`);

    if (cached && cachedTime && !forceRefresh) {
      const isExpired = Date.now() - parseInt(cachedTime) > cacheTime;
      if (!isExpired) {
        setData(JSON.parse(cached));
        return;
      }
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetchAPI<T>(endpoint);
      setData(response);
      
      localStorage.setItem(cacheKey, JSON.stringify(response));
      localStorage.setItem(`${cacheKey}-time`, Date.now().toString());
    } catch (err) {
      if (cached) {
        setData(JSON.parse(cached));
      }
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }, [endpoint, cacheKey, cacheTime]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const invalidate = useCallback(() => {
    localStorage.removeItem(cacheKey);
    localStorage.removeItem(`${cacheKey}-time`);
    fetchData(true);
  }, [cacheKey, fetchData]);

  return { data, loading, error, refetch: fetchData, invalidate };
}
