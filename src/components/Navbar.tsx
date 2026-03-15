"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, ROUTES } from '@/constants/routes';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { THEME } from '@/constants/theme';
import { CONTACT_CONTENT } from '@/constants/content';
import logo from "../assets/images/logoLU.png";
import Image from 'next/image';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = NAV_LINKS;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm border-b border-[#D6E4F0]' : 'bg-white border-b border-[#D6E4F0]'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <Link href="/" className="flex items-center space-x-3 group">
                        <Image src={logo} alt="Logo" width={150} height={200} />
                    </Link>

                    <div className="hidden xl:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`text-sm font-medium transition-all relative py-2 tracking-wide ${pathname === link.path
                                    ? 'text-[#0062B2] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#0062B2]'
                                    : 'text-[#334155] hover:text-[#0062B2]'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href={ROUTES.CONTACT}
                            className="bg-[#0062B2] text-white px-7 py-3 text-sm font-semibold hover:bg-[#004E8C] transition-all ml-4 tracking-wide uppercase"
                        >
                            {CONTACT_CONTENT.navbarBookAudit}
                        </Link>
                    </div>

                    <button className="xl:hidden p-2 text-[#0D1B2A]" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="xl:hidden bg-white border-t border-[#D6E4F0] px-6 pt-4 pb-10 space-y-1 shadow-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block py-4 text-sm font-semibold border-b border-[#E8F0F9] tracking-wide ${pathname === link.path ? 'text-[#0062B2]' : 'text-[#334155] hover:text-[#0062B2]'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href={ROUTES.CONTACT}
                        onClick={() => setIsOpen(false)}
                        className="block w-full bg-[#0062B2] text-white text-center py-4 font-semibold mt-6 tracking-widest uppercase text-sm"
                    >
                        {CONTACT_CONTENT.navbarBookAudit}
                    </Link>
                </div>
            )}
        </nav>
    );
};
