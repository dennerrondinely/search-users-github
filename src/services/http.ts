export async function http<T>(url: string, params = {}): Promise<T> {
  const response = await fetch(url, params);
  const body = await response.json();
  return body;
}
