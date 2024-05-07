
import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="bg-green-500 text-white py-4 px-6">
            <Link to="/" className="text-2xl font-semibold">OpenKart</Link>
        </header>
    )
}

export default Navbar