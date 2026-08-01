// API Configuration
export const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  apiVersion: 'v1',
  timeout: 10000,
};

// API Endpoints
export const API_ENDPOINTS = {
  // Countries
  countries: `${API_CONFIG.baseURL}/api/${API_CONFIG.apiVersion}/countries`,
  countryServices: `${API_CONFIG.baseURL}/api/${API_CONFIG.apiVersion}/country-services`,

  // Services
  services: `${API_CONFIG.baseURL}/api/${API_CONFIG.apiVersion}/services`,
  pricing: `${API_CONFIG.baseURL}/api/${API_CONFIG.apiVersion}/pricing`,

  // Meetings
  meetings: `${API_CONFIG.baseURL}/api/${API_CONFIG.apiVersion}/meetings`,

  // Enquiries
  enquiries: `${API_CONFIG.baseURL}/api/${API_CONFIG.apiVersion}/enquiries`,

  // Blogs
  blogs: `${API_CONFIG.baseURL}/api/${API_CONFIG.apiVersion}/blogs`,

  // Analytics
  analytics: `${API_CONFIG.baseURL}/api/${API_CONFIG.apiVersion}/analytics`,

  // SEO
  seo: `${API_CONFIG.baseURL}/api/${API_CONFIG.apiVersion}/seo`,

  // Health
  health: `${API_CONFIG.baseURL}/health`,
};

// API Helper Functions
export async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = endpoint.startsWith('http') ? endpoint : `${API_CONFIG.baseURL}${endpoint}`;

  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export async function postAPI<T>(endpoint: string, data: any): Promise<T> {
  return fetchAPI<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function putAPI<T>(endpoint: string, data: any): Promise<T> {
  return fetchAPI<T>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export async function deleteAPI<T>(endpoint: string): Promise<T> {
  return fetchAPI<T>(endpoint, {
    method: 'DELETE',
  });
}
