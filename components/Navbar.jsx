import React from 'react'
import Link from 'next/link'
export default function Navbar() {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="flex justify-between items-center">
                <div className="space-x-4">
                    <h2 className="text-white text-4xl font-bold hover:underline">
                        DEMO Streaming
                    </h2>

                </div>
                <div className="space-x-4">
                    <Link href="/">
                        <button className="bg-none text-white px-4 py-2 rounded hover:bg-gray-100">
                            Login
                        </button>
                    </Link>
                    <Link href="/">
                        <button className="bg-slate-800 text-white px-4 py-2 rounded hover:bg-gray-100">
                            Start Your Free Trial
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
