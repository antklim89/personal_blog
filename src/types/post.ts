import { IGatsbyImageData } from 'gatsby-plugin-image';


export interface IPost {
    id: string
    body: string
    title: string
    createdAt: string
    imagePreview: {
        gatsbyImageData: IGatsbyImageData;
        url: string
        width: number
        height: number
    }
}
