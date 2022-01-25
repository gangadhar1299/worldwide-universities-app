const baseUrl = process.env.REACT_APP_API_URL;

export function apiClient(url: string, config?: RequestInit) {
  return window.fetch(`${baseUrl}/${url}`, config).then((res) => res.json());
}
