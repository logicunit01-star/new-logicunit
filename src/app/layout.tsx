import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Logic Unit | Operational Control & Systems Transformation',
    description: 'A specialized operational transformation partner for growing distribution and trading businesses.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-white text-slate-900 overflow-x-hidden`}>
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <main className="flex-grow pt-20">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
