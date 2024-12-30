"import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <footer className={`p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div>
                    <h4 className='font-bold'>Address</h4>
                    <p>123 Main Street</p>
                    <p>Anytown, CA 12345</p>
                </div>
                <div>
                    <h4 className='font-bold'>Useful Links</h4>
                    <ul className='space-y-1'>
                        <li><Link href='/about'>About Us</Link></li>
                        <li><Link href='/privacy'>Privacy Policy</Link></li>
                        <li><Link href='/terms'>Terms of Service</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-bold'>Contact Us</h4>
                    <ul className='space-y-1'>
                        <li>Email: info@example.com</li>
                        <li>Phone: +1 555 123 4567</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;