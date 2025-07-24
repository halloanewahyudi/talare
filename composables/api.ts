// composables/useApi.ts
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
  const config = useRuntimeConfig()
  const url = config.public.baseUrl + '/api/v1' + endpoint

  const fetcher = options.lazy ? useLazyFetch : useFetch

  return fetcher<T>(url, {
    method: options.method || 'GET',
    query: options.query,
    body: options.body,
    immediate: options.immediate ?? true,
  })
}
