
import { Router } from "express";
import FedexTrackingController from "../controllers/fedexTrackingController.js"


const router = Router()

router.route("/track").post(FedexTrackingController.trackFedexShipment)

export default router