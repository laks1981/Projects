import axios from 'axios';

const API_BASE_URL = 'https://api.yourservice.com';

export const fetchSchedules = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/schedules`);
        return response.data;
    } catch (error) {
        console.error('Error fetching schedules:', error);
        throw error;
    }
};

export const bookClass = async (bookingData: { name: string; email: string; classId: string }) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData);
        return response.data;
    } catch (error) {
        console.error('Error booking class:', error);
        throw error;
    }
};

export const processPayment = async (paymentData: { amount: number; method: string; details: any }) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/payments`, paymentData);
        return response.data;
    } catch (error) {
        console.error('Error processing payment:', error);
        throw error;
    }
};