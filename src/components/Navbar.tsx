"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, ROUTES } from '@/constants/routes';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { THEME } from '@/constants/theme';
import { CONTACT_CONTENT } from '@/constants/content';

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
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm border-b border-[#E8E8E0]' : 'bg-white border-b border-[#E8E8E0]'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 bg-[#00502C] flex items-center justify-center transition-all group-hover:bg-[#003D21]">
                            <span className="text-white font-bold text-xl tracking-tight">{THEME.logo.char}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight text-[#1A1A1A] leading-none">{SITE_CONFIG.name}</span>
                            <span className="text-[10px] font-bold tracking-[0.22em] text-[#00502C] uppercase leading-none mt-1">{SITE_CONFIG.tagline}</span>
                        </div>
                    </Link>

                    <div className="hidden xl:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`text-sm font-medium transition-all relative py-2 tracking-wide ${pathname === link.path
                                    ? 'text-[#00502C] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#00502C]'
                                    : 'text-[#4A4A4A] hover:text-[#00502C]'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href={ROUTES.CONTACT}
                            className="bg-[#00502C] text-white px-7 py-3 text-sm font-semibold hover:bg-[#003D21] transition-all ml-4 tracking-wide uppercase"
                        >
                            {CONTACT_CONTENT.navbarBookAudit}
                        </Link>
                    </div>

                    <button className="xl:hidden p-2 text-[#1A1A1A]" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="xl:hidden bg-white border-t border-[#E8E8E0] px-6 pt-4 pb-10 space-y-1 shadow-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block py-4 text-sm font-semibold border-b border-[#F0F0EC] tracking-wide ${pathname === link.path ? 'text-[#00502C]' : 'text-[#4A4A4A] hover:text-[#00502C]'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href={ROUTES.CONTACT}
                        onClick={() => setIsOpen(false)}
                        className="block w-full bg-[#00502C] text-white text-center py-4 font-semibold mt-6 tracking-widest uppercase text-sm"
                    >
                        {CONTACT_CONTENT.navbarBookAudit}
                    </Link>
                </div>
            )}
        </nav>
    );
};
