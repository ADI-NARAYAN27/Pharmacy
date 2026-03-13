import axios from 'axios';
import medicines from '../data/medicines.json';
import healthPackages from '../data/healthPackages';
import orderHistory from '../data/orderHistory';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
});

const USE_MOCK_API = import.meta.env.VITE_USE_MOCK_API !== 'false';
const MOCK_DELAY = 650;

const simulateResponse = (payload) =>
  new Promise((resolve) => {
    window.setTimeout(() => resolve(payload), MOCK_DELAY);
  });

export async function getMedicines(filters = {}) {
  if (USE_MOCK_API) {
    const searchTerm = filters.search?.trim().toLowerCase() || '';
    const category = filters.category || 'All';

    const filteredMedicines = medicines.filter((medicine) => {
      const matchesSearch =
        !searchTerm ||
        medicine.name.toLowerCase().includes(searchTerm) ||
        medicine.category.toLowerCase().includes(searchTerm);

      const matchesCategory = category === 'All' || medicine.category === category;
      return matchesSearch && matchesCategory;
    });

    return simulateResponse(filteredMedicines);
  }

  const response = await apiClient.get('/api/medicines', { params: filters });
  return response.data;
}

export async function uploadPrescription(file) {
  if (USE_MOCK_API) {
    return simulateResponse({
      message: 'Prescription uploaded successfully',
      fileName: file.name,
      referenceId: 'RX-UPLOAD-2048',
    });
  }

  const formData = new FormData();
  formData.append('prescription', file);

  const response = await apiClient.post('/api/prescriptions/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
}

export async function placeOrder(orderPayload) {
  if (USE_MOCK_API) {
    return simulateResponse({
      orderId: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
      status: 'Confirmed',
      payload: orderPayload,
    });
  }

  const response = await apiClient.post('/api/orders', orderPayload);
  return response.data;
}

export async function getOrderHistory() {
  if (USE_MOCK_API) {
    return simulateResponse(orderHistory);
  }

  const response = await apiClient.get('/api/orders/history');
  return response.data;
}

export async function getHealthPackages() {
  if (USE_MOCK_API) {
    return simulateResponse(healthPackages);
  }

  const response = await apiClient.get('/api/health-packages');
  return response.data;
}
