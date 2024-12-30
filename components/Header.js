import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header className={`p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            <div className='container mx-auto flex justify-between items-center'>
                <Link href='/' className='text-xl font-bold'>
                    <span className='text-yellow-500'>Your</span>Logo
                </Link>
                <nav className='space-x-4'>
                    <Link href='/games' className={`hover:text-yellow-500 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Games</Link>
                    <Link href='/features' className={`hover:text-yellow-500 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Features</Link>
                    <Link href='/contact' className={`hover:text-yellow-500 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Contact</Link>
                    <button onClick={toggleTheme} className={`p-2 rounded ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
                        {theme === 'dark' ? 'Light' : 'Dark'}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
