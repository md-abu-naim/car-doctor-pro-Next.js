"use client"

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navber = () => {
    const { data: session, status } = useSession()

    const navMenu = <>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/servicess'>Servicess</Link></li>
        <li><Link href='/blog'>Blog</Link></li>
        <li><Link href='/contact'>Contact</Link></li>
        <li><Link href='/my-bookings'>My Bookings</Link></li>
    </>
    return (
        <div className="navbar text-black shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navMenu}
                    </ul>
                </div>
                <Link href='/' className="btn btn-ghost text-xl">
                    <Image src='/assets/logo.svg' alt="" width={107} height={87} />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    status === "authenticated" ? <div className="flex items-center gap-3">
                        <Image src={session?.user?.image} alt="" width={25} height={25} className="rounded-full" />
                         <button onClick={() => signOut()} className="btn ">LogOut</button>
                    </div>:
                    <div>
                        <Link href='/login' className="btn">Login</Link>
                        <Link href='/register' className="btn">Register</Link>
                    </div> 
                }
                <a className="btn btn-outline">Appointment</a>
            </div>
        </div>
    );
};

export default Navber;