import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { FOOTER_SOLUTIONS_LINKS } from '@/constants/routes';
import { THEME } from '@/constants/theme';
import Image from 'next/image';
import logoFooter from "../assets/images/logoLU.png";

export const Footer = () => (
    <footer className="bg-[#0D1B2A] text-slate-300 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-white/10 pb-16">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="flex items-center space-x-3 group mb-8">
                        <Image src={logoFooter} alt="Logo" width={150} height={200} />
                    </Link>
                    <p className="max-w-md mb-8 text-[#9AAFCA] text-sm leading-relaxed">
                        {SITE_CONFIG.description}
                    </p>
                    {/* <div className="flex space-x-4">
                        <a href={SITE_CONFIG.socials.linkedin} className="text-[#9AAFCA] hover:text-[#75BF2A] transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div> */}
                </div>

                <div>
                    <h4 className="text-white font-bold mb-8 uppercase text-[11px] tracking-[0.2em]">Solutions</h4>
                    <ul className="space-y-4 text-sm text-[#9AAFCA]">
                        {FOOTER_SOLUTIONS_LINKS.map((link) => (
                            <li key={link.name}><Link href={link.path} className="hover:text-[#75BF2A] transition-colors">{link.name}</Link></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-8 uppercase text-[11px] tracking-[0.2em]">Contact</h4>
                    <ul className="space-y-5 text-sm text-[#9AAFCA]">
                        <li className="flex items-start space-x-3 hover:text-white transition-colors">
                            <MapPin size={16} className="text-[#75BF2A] flex-shrink-0 mt-0.5" />
                            <span>{SITE_CONFIG.contact.location}</span>
                        </li>
                        <li className="flex items-start space-x-3 hover:text-white transition-colors">
                            <Mail size={16} className="text-[#75BF2A] flex-shrink-0 mt-0.5" />
                            <span>{SITE_CONFIG.contact.email}</span>
                        </li>
                        <li className="flex items-start space-x-3 hover:text-white transition-colors">
                            <Phone size={16} className="text-[#75BF2A] flex-shrink-0 mt-0.5" />
                            <span>{SITE_CONFIG.contact.phone}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#4A6080]">
                <p>© {SITE_CONFIG.year} {SITE_CONFIG.author}. All Rights Reserved.</p>

            </div>
        </div>
    </footer>
);
