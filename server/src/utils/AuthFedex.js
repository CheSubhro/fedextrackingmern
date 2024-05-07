
import axios from 'axios';

const authFedex = async () => {
  try {
    // Input Data
    const inputPayload = {
      grant_type: 'client_credentials',
      client_id: process.env.FEDEX_API_KEY,
      client_secret: process.env.FEDEX_SECRET_KEY
    };

    // Headers
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    // Make POST request to FedEx API to authenticate
    const response = await axios.post(
      `${process.env.FEDEX_BASE_API_URL}/oauth/token`,
      new URLSearchParams(inputPayload).toString(), // Convert inputPayload to x-www-form-urlencoded format
      { headers: headers }
    );

    return response.data; // Return the authentication response data
  } catch (error) {
    console.error('Error authenticating with FedEx API:', error);
    throw new Error('Failed to authenticate with FedEx API');
  }
};

export default authFedex;
