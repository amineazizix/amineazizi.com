"use client";

import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../commons/MobileMenu";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white font-sans border-b border-gray-100">
      <div className="container-layout flex items-center justify-between w-full py-3">
         <div className="">
         <Link href="/">
            <div className="h-auto w-[100px] md:w-[150px]">
               <Image src="/logo-big.svg" alt="logo" width={200} height={200} />
            </div>
         </Link>
         </div>
         <nav className="items-center gap-6 hidden md:flex">
            <ul className="flex items-center gap-6">
               <li>
                  <Link href="/" className="text-gray-700 hover:text-gray-950">The Way</Link>
               </li>
               <li>
                  <Link href="/" className="contact-button">Contact</Link>
               </li>
               <li>
                  <Link href="/" className="text-gray-700 hover:text-gray-950">The Me</Link>
               </li>
            </ul>
         </nav>
         <div className="md:hidden flex items-center">
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
         </div>
         <div className="hidden md:flex items-center gap-2">
            <Link href="/">
               <Image src="/social-media/github.svg" alt="github" width={40} height={40} />
            </Link>
            <Link href="/">
               <Image src="/social-media/twitter.svg" alt="twitter" width={40} height={40} />
            </Link>
            <Link href="/">
               <Image src="/social-media/linkedin.svg" alt="linkedin" width={40} height={40} />
            </Link>
         </div>
      </div>

      {isOpen && (
        <div className="w-full bg-white z-50 flex flex-col items-center justify-center shadow-md divide-y divide-gray-200">
            <div className="w-full text-center py-2 shadow-xs">
               <Link href="/">The Way</Link>
            </div>
            <div className="w-full text-center py-2 shadow-xs">
               <Link href="/">The Me</Link>
            </div>
            <div className="w-full flex items-center gap-3 justify-center py-2">
               <Link href="/" className="contact-button">Contact</Link>
               <Link href="/">
                  <Image src="/social-media/github.svg" alt="github" width={30} height={30} />
               </Link>
               <Link href="/">
                  <Image src="/social-media/twitter.svg" alt="twitter" width={30} height={30} />
               </Link>
               <Link href="/">
                  <Image src="/social-media/linkedin.svg" alt="linkedin" width={30} height={30} />
               </Link>
            </div>
        </div>
      )}
    </header>
  );
}
