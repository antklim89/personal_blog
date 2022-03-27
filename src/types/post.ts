import { IGatsbyImage } from './gatsby-image';


export interface IPost {
    id: string
    body: string
    frontmatter: {
        title: string
        createdAt: string
        imagePreview: IGatsbyImage
    }
}
