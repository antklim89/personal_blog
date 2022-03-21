

export interface SeoProps {
    description?: string;
    meta?: {
        name: string;
        content: string;
    }[];
    title: string;
    keywords?: string[]
}

export interface SeoQuery {
    metadata: {
        title: string
        description: string
        keywords: string[]
    }
}
