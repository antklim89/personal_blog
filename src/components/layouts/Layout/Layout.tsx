import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

import { Footer, Header } from '~/components';


const Layout: FC<{ readonly children: ReactNode }> = ({ children }) => {

    return (
        <div className="root">
            <Header />
            <motion.main
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                initial={{ opacity: 0, x: -200 }}
                key={typeof window === 'undefined' ? '1' : location.pathname}
                transition={{
                    type: 'spring',
                    mass: 0.35,
                    stiffness: 75,
                    duration: 0.3,
                }}
            >
                {children}
            </motion.main>
            <Footer />
        </div>
    );
};

export default Layout;
