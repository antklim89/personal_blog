import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';

import Footer from '~/layouts/Footer';
import Header from '~/layouts/Header';


const Layout: FC = ({ children }) => {
    return (
        <div className="root">
            <Header />
            <AnimatePresence mode='wait'>
                <motion.main
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    key={typeof window === 'undefined' ? '1' : location.pathname}
                    transition={{
                        type: 'spring',
                        mass: 0.35,
                        stiffness: 90,
                    }}
                >
                    {children}
                </motion.main>
            </AnimatePresence>
            <Footer />
        </div>
    );
};

export default Layout;
