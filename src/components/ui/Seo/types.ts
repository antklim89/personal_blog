

export interface SeoProps {
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
