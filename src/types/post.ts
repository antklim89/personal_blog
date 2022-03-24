import { IGatsbyImageData } from 'gatsby-plugin-image';


export interface Post {
    id: string
    body: string
    frontmatter: {
        title: string
        createdAt: string
        imagePreview: {
            childImageSharp: IGatsbyImageData
        }
    }
}
