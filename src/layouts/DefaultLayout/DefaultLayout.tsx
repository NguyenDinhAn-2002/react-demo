import { ReactNode } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

interface DefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <>
            <Header />

            <div className='container'>
                <main role='main' className='pb-3'>
                    {children}
                </main>
            </div>

            <Footer />
        </>
    );
};

export default DefaultLayout;