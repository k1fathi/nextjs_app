
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from '../context/ThemeContext';

const Layout = ({ children }) => {
    return (
        <ThemeProvider>
            <div className='flex flex-col min-h-screen'>
                <Header />
                <main className='container mx-auto flex-grow p-4'>
                    {children}
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default Layout;
