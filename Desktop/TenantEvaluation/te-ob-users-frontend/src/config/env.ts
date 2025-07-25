// Environment variables configuration
export const config = {
  TE_API_URL: import.meta.env.VITE_TE_API_URL || 'https://r2-qa.tev2.co/api',
  // Add other environment variables here
};

// Type-safe environment variables
export const getApiUrl = (): string => {
  return config.TE_API_URL;
};

export const getEnvVar = (key: string): string => {
  return import.meta.env[`VITE_${key}`] || '';
};
