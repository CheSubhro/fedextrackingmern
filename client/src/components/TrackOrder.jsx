
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const TrackOrder = () => {

    const { trackingNumber } = useParams();
    const [orderData, setOrderData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getTrackingDetails() {
          try {
            const trackingDetails = await axios.post("http://localhost:3000/api/v1/fedex/track", { trackingNumber })
            setOrderData(trackingDetails.data.reverse())
            setLoading(false)
          } catch (error) {
            console.log("Something is Wrong", error);
            setLoading(false)
          }
        }
        getTrackingDetails()
      }, [trackingNumber])
    return (
        <>
            <Navbar />
            <div className='m-10'>
                <div className='flex flex-col items-center mb-10'>
                <svg className='h-32 text-orange-400 fill-current' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 113.21"><title>courier</title><path className="cls-1" d="M82.42,60a3.52,3.52,0,1,0,3.2,3.51A3.36,3.36,0,0,0,82.42,60Z" /><path className="cls-2" d="M76.64,113.21l1.25-32.57c-8.45,8.48-15,14.79-27.82,15.12-4.06-.15-14.62-.46-18.68-.91C26.44,94.29,23,94.5,19.85,90,15,83,21.41,74.84,27.71,76.15c7.11.63,24,2.24,28.85-3.71,5-4.8,8.9-11.5,15.44-13.63,36.83-12,50.8-7.64,50.79,5.9l0,48.5ZM56.5,29.66,40.2,20,47,19.3l20.74,9.11L56.5,29.66ZM17.27,37.23V70.57a17.77,17.77,0,0,0-6.2,9.26L0,73.22.34,26.56,17.27,37.23Zm7.09-15.15,16.81,9.54L19.3,34.41,4,24.75l20.39-2.67Zm-3.61,46.4V37.72l22.79-2.91.75,21.78,8-5.45,8,4.53L58.64,32.89,72.3,31.32V47.74c-5.31,2.62-9.06,7-12.81,11.45a71.69,71.69,0,0,1-4.82,5.33,6.31,6.31,0,0,0-.55.6C50.71,69.31,38.6,68.19,31,67.49c-3.1-.29,4,.32-1.59-.17a15.09,15.09,0,0,0-8.63,1.16ZM83.5,7.6H67.92c-.52,0-.79.45-.93,1l-1.81,6.51c-.14.5.42,1,.93,1H78.69a24.27,24.27,0,0,0-1.16,7.43c0,13,10.15,23.46,22.68,23.46s22.67-10.5,22.67-23.46S112.73,0,100.21,0A22.3,22.3,0,0,0,83.5,7.6Z" /></svg>
                <p className='text-white font-semibold mt-3'>Tracking Number: {trackingNumber}</p>
                </div>
                {loading ? (<div role="status" className='flex items-center justify-center'>
                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
                </div>) : (<div className='flex flex-col items-center'>
                <ol className="relative text-gray-50 ">
                    {orderData.map((item, index) => (
                    <li key={index} className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                        <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                        </svg>
                        </span>
                        <h3 className="font-medium leading-tight ml-2">{item.eventDescription}</h3>
                        <p className="text-sm ml-3">Shippment scanned at {item.city || 'Fedex'} </p>
                    </li>
                    ))}
                </ol>
                </div>)}


            </div>
        </>
    )
}

export default TrackOrder