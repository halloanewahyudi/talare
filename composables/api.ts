// composables/useApi.ts
import { useFetch } from '#app';

export function useApi<T>(
  endpoint: string,
  options: {
    lazy?: boolean
    query?: Record<string, any>
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    body?: any
    immediate?: boolean
  } = {}
) {
  const config = useRuntimeConfig();
  const url = config.public.baseUrl + '/api/v1' + endpoint;

  const fetcher = options.lazy ? useLazyFetch : useFetch;

  // Pastikan properti response di-destructure dengan benar
  const { data, response, ...rest } = fetcher<T>(url, {
    method: options.method || 'GET',
    query: options.query,
    body: options.body,
    immediate: options.immediate ?? true,
  });

  return { data, response, ...rest };
}