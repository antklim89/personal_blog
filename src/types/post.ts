import { IGatsbyImageData } from 'gatsby-plugin-image';


export interface IPost {
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
