import axios from 'axios';
import authFedex  from '../utils/AuthFedex.js'; // Import the function to authenticate with FedEx

class FedexTrackingController {
  static trackFedexShipment = async (req, res) => {
    try {
      const authRes = await authFedex(); // Authenticate with FedEx
      const { trackingNumber } = req.body;

      // Input Data
      const inputPayload = {
        includeDetailedScans: true,
        trackingInfo: [
          {
            trackingNumberInfo: {
              trackingNumber: trackingNumber
            }
          }
        ]
      };

      const headers = {
        'Content-Type': 'application/json',
        'X-locale': 'en_US',
        'Authorization': `Bearer ${authRes.access_token}`
      };

      // Make POST request to FedEx API to track shipment
      const response = await axios.post(
        `${process.env.FEDEX_BASE_API_URL}/track/v1/trackingnumbers`,
        inputPayload,
        { headers: headers }
      );

      // Extract relevant tracking details from response
      const trackingDetails = response.data.output.completeTrackResults[0].trackResults[0].scanEvents.map(item => ({
        eventDescription: item.eventDescription,
        city: item.scanLocation.city
      }));

      res.set('Access-Control-Allow-Origin', process.env.CORS_ORIGIN);
      res.set('Access-Control-Allow-Methods', 'POST');
      res.set('Access-Control-Allow-Headers', 'Content-Type');
      
      // Send tracking details to client
      res.send(trackingDetails);
    } catch (error) {
      console.error('Error tracking FedEx shipment:', error);
      res.status(500).send('Failed to track FedEx shipment');
    }
  }
}

export default FedexTrackingController;
