import { baseApiEndPoint } from 'env';

export async function http<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${baseApiEndPoint}${endpoint}`);
  const body = await response.json();
  return body;
}
