import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

interface TokenData {
  sub: string;        // Subject (email del usuario)
  auth: string;       // Role/Authorization
  fn: string;         // First name
  ln: string;         // Last name
  em: string;         // Email
  exp: number;        // Expiration timestamp
}

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null);
  const tokenData = ref<TokenData | null>(null);

  const isAuthenticated = computed(() => !!token.value);

  const isTokenExpired = computed(() => {
    if (!tokenData.value?.exp) return true;
    return Date.now() >= tokenData.value.exp * 1000;
  });

  function decodeToken(tokenString: string): TokenData | null {
    try {
      const base64Url = tokenString.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  function setToken(newToken: string) {
    token.value = newToken;
    tokenData.value = decodeToken(newToken);
  }

  function clearToken() {
    token.value = null;
    tokenData.value = null;
  }

  function getToken(): string | null {
    return token.value;
  }

  function getTokenData(): TokenData | null {
    return tokenData.value;
  }

  function getUserEmail(): string | null {
    return tokenData.value?.em || null;
  }

  function getUserName(): string | null {
    if (tokenData.value?.fn && tokenData.value?.ln) {
      return `${tokenData.value.fn} ${tokenData.value.ln}`;
    }
    return tokenData.value?.fn || tokenData.value?.ln || null;
  }

  function getUserFirstName(): string | null {
    return tokenData.value?.fn || null;
  }

  function getUserLastName(): string | null {
    return tokenData.value?.ln || null;
  }

  function getUserRole(): string | null {
    return tokenData.value?.auth || null;
  }

  function getSubject(): string | null {
    return tokenData.value?.sub || null;
  }

  return {
    token,
    tokenData,
    isAuthenticated,
    isTokenExpired,
    setToken,
    clearToken,
    getToken,
    getTokenData,
    getUserEmail,
    getUserName,
    getUserFirstName,
    getUserLastName,
    getUserRole,
    getSubject
  };
});
