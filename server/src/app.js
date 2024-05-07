import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import FedexTrackingController from './controllers/fedexTrackingController.js';

const app = express();

const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    credentials: true
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Define route for tracking FedEx shipments
app.post("/api/v1/fedex/track", FedexTrackingController.trackFedexShipment);

export { app };