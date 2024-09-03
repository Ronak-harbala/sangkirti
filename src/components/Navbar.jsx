import React from "react";
import { IoPerson } from "react-icons/io5";

function Navbar(){
    return (
        <nav className="bg-black flex text-white justify-between items-center px-7 py-5">
            <div className="logo">
                <h2>Sang Kirti</h2>
            </div>
            <ul className="flex gap-14 items-center">
                <li>Chatbot</li>
                <li>Explore</li>
                <li>Community</li>
                <li className="h-full bg-zinc-200 p-3 rounded-full text-black"><IoPerson /></li>
            </ul>
        </nav>
    )
}

export default Navbar;