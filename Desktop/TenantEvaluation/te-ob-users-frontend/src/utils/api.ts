import { getApiUrl } from '@/config/env';

// API utility functions
export const apiConfig = {
  baseURL: getApiUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
};

// Helper function to make API calls
export async function apiCall(endpoint: string, options: RequestInit = {}) {
  const url = `${apiConfig.baseURL}${endpoint}`;

  const config: RequestInit = {
    ...apiConfig,
    ...options,
    headers: {
      ...apiConfig.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}

// Example API functions
export const userApi = {
  // Get users list
  getUsers: () => apiCall('/users'),

  // Create new user
  createUser: (userData: any) => apiCall('/users', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),

  // Update user
  updateUser: (userId: string, userData: any) => apiCall(`/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(userData),
  }),

  // Delete user
  deleteUser: (userId: string) => apiCall(`/users/${userId}`, {
    method: 'DELETE',
  }),
};
