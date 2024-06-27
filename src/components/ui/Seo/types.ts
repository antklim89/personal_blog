import { ReactNode } from 'react';


export interface SeoProps {
    children?: ReactNode;
    description?: string;
    title: string;
    keywords?: string[],
    image?: {
        src: string
        type: string
        width: number
        height: number
    }
}
