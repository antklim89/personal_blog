import { FC } from 'react';

import Footer from '~/layouts/Footer';
import Header from '~/layouts/Header';


const Layout: FC = ({ children }) => {
    return (
        <div className="root">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
