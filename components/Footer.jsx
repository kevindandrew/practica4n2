import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white p-6">
            <div className="container mx-auto flex flex-col justify-between gap-6">
                <div className="flex mb-4 md:mb-0">
                    <ul className="mt-2 space-y-1 flex gap-8 items-center justify-center">
                        <li className="hover:underline">Home</li>
                        <li className="hover:underline">Terms and Conditions</li>
                        <li className="hover:underline">Privacy Policy</li>
                        <li className="hover:underline">Collection Statement</li>
                        <li className="hover:underline">help</li>
                        <li className="hover:underline">Manage Account</li>
                    </ul>
                </div>
                <div className="">
                    <p className="text-sm">Copyrigth © 2016 DEMO Streaming. All rights reserved.</p>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-8'>
                        <Image
                            src="/assets/social/facebook-white.svg"
                            width={30}
                            height={30}
                            alt="Facebook logo"
                        />
                        <Image
                            src="/assets/social/twitter-white.svg"
                            width={55}
                            height={55}
                            alt="twitter logo"
                        />
                        <Image
                            src="/assets/social/instagram-white.svg"
                            width={55}
                            height={55}
                            alt="insta logo"
                        />
                    </div>
                    <div className='flex gap-5'>
                        <Image
                            src="/assets/store/app-store.svg"
                            width={200}
                            height={200}
                            alt="app logo"
                        />
                        <Image
                            src="/assets/store/play-store.svg"
                            width={200}
                            height={200}
                            alt="play logo"
                        />
                        <Image
                            src="/assets/store/windows-store.svg"
                            width={160}
                            height={160}
                            alt="windows logo"
                        />
                    </div>
                </div>



            </div>
        </footer>
    )
}
