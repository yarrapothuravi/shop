import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Pickup Request API
export const pickupAPI = {
  // Create new pickup request
  create: async (data) => {
    try {
      const response = await api.post('/pickup', data);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Network error occurred' };
    }
  },

  // Get all pickup requests (Admin)
  getAll: async () => {
    try {
      const response = await api.get('/pickups');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Network error occurred' };
    }
  },

  // Health check
  healthCheck: async () => {
    try {
      const response = await api.get('/health');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Network error occurred' };
    }
  },
};

export default api;
