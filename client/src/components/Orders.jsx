
import React from 'react'
import ProductCard from './ProductCard';
import Asus from '/images/asuslaptop.jpg'
import Nokia from '/images/nokia.jpg'
import Dell from '/images/delllaptop.jpg'
import LG from '/images/lgmonitor.jpg'
import Rode from '/images/rodent.jpg'
import Samsung from '/images/samsung.jpg'

const Orders = () => {
    // Sample product data
    const products = [
        { id: 1, title: 'Asus 2212 Laptop', description: 'This is sample description', price: 100, pic: Asus, trackingNumber: '122816215025810' },
        { id: 2, title: 'Nokia 3200', description: 'This is sample description', price: 200, pic: Nokia, trackingNumber: '231300687629630' },
        { id: 3, title: 'Dell 6714 Laptop', description: 'This is sample description', price: 300, pic: Dell, trackingNumber: '377101283611590' },
        { id: 4, title: 'LG 4K Monitor', description: 'This is sample description', price: 400, pic: LG, trackingNumber: '843119172384577' },
        { id: 5, title: 'Rode NT USB Mic', description: 'This is sample description', price: 500, pic: Rode, trackingNumber: '070358180009382' },
        { id: 6, title: 'Samsung Galaxy S22', description: 'This is sample description', price: 600, pic: Samsung, trackingNumber: '076288115212522' },
    ];
    return (
        <main className='mx-6 lg:mx-48 my-10 grid grid-cols-1 gap-6'>
            <h1 className='text-white font-bold text-3xl'>My Orders</h1>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </main>
    )
}

export default Orders