import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import './globals.css'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Tech Talent Recruitment and Acquisition',
    description:
        'Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ',
    canonical: 'https://www.analogueshifts.com',
    ogImage: '@/public/images/a4.jpg',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    )
}
