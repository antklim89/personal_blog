import { IGatsbyImageData } from 'gatsby-plugin-image';


export interface IPost {
    id: string
    body: {
        html: string
    }
    bodyPreview: string
    title: string
    createdAt: string
    imagePreview: {
        gatsbyImageData: IGatsbyImageData;
        url: string
        width: string
        height: string
    }
}
