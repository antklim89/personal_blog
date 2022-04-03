

export interface SeoProps {
    description?: string;
    meta?: {
        name: string;
        content: string;
    }[];
    title: string;
    keywords?: string[],
    image?: {
        src: string
        type: string
        width: string
        height: string
    }
}

export interface SeoQuery {
    metadata: {
        title: string
        description: string
        keywords: string[]
    }
}
