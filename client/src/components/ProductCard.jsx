
import React from 'react'
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white shadow-md rounded-md p-4 flex justify-around">
            <img src={product.pic} alt="" width="80px" />
            <div>
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <h2 className="text-sm font-semibold">{product.description}</h2>
            </div>
            <p className="text-gray-500">₹{product.price}</p>
            <Link to={`/track/${product.trackingNumber}`} className="mt-4 text-sm bg-teal-500 hover:bg-teal-600 text-white px-3 py-2 rounded-md">Track Order</Link>
        </div>
    )
}

export default ProductCard