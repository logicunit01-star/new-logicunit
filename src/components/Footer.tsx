import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { FOOTER_SOLUTIONS_LINKS } from '@/constants/routes';
import { THEME } from '@/constants/theme';

export const Footer = () => (
    <footer className="bg-[#1A1A1A] text-slate-300 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-white/10 pb-16">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center space-x-3 mb-8">
                        <div className="w-10 h-10 bg-[#00502C] flex items-center justify-center">
                            <span className="text-white font-bold text-xl">{THEME.logo.char}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight text-white leading-none">{SITE_CONFIG.name}</span>
                            <span className="text-[10px] font-bold tracking-[0.22em] text-[#78BE20] uppercase leading-none mt-1">{SITE_CONFIG.tagline}</span>
                        </div>
                    </div>
                    <p className="max-w-md mb-8 text-[#9A9A9A] text-sm leading-relaxed">
                        {SITE_CONFIG.description}
                    </p>
                    <div className="flex space-x-4">
                        <a href={SITE_CONFIG.socials.linkedin} className="text-[#9A9A9A] hover:text-[#78BE20] transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-8 uppercase text-[11px] tracking-[0.2em]">Solutions</h4>
                    <ul className="space-y-4 text-sm text-[#9A9A9A]">
                        {FOOTER_SOLUTIONS_LINKS.map((link) => (
                            <li key={link.name}><Link href={link.path} className="hover:text-[#78BE20] transition-colors">{link.name}</Link></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-8 uppercase text-[11px] tracking-[0.2em]">Contact</h4>
                    <ul className="space-y-5 text-sm text-[#9A9A9A]">
                        <li className="flex items-start space-x-3 hover:text-white transition-colors">
                            <MapPin size={16} className="text-[#78BE20] flex-shrink-0 mt-0.5" />
                            <span>{SITE_CONFIG.contact.location}</span>
                        </li>
                        <li className="flex items-start space-x-3 hover:text-white transition-colors">
                            <Mail size={16} className="text-[#78BE20] flex-shrink-0 mt-0.5" />
                            <span>{SITE_CONFIG.contact.email}</span>
                        </li>
                        <li className="flex items-start space-x-3 hover:text-white transition-colors">
                            <Phone size={16} className="text-[#78BE20] flex-shrink-0 mt-0.5" />
                            <span>{SITE_CONFIG.contact.phone}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#666666]">
                <p>© {SITE_CONFIG.year} {SITE_CONFIG.author}. All Rights Reserved.</p>
                <div className="flex space-x-8 mt-4 md:mt-0">
                    <a href={SITE_CONFIG.legal.privacyPolicy} className="hover:text-[#78BE20] transition-colors tracking-wide">Privacy Policy</a>
                    <a href={SITE_CONFIG.legal.termsOfEngagement} className="hover:text-[#78BE20] transition-colors tracking-wide">Terms of Engagement</a>
                </div>
            </div>
        </div>
    </footer>
);
