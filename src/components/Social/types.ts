import { IGatsbyImageData } from 'gatsby-plugin-image';


export interface SocialQuery {
    social: {
        icons: Array<{
            name: string
            link: string
            icon: {
                childImageSharp?: {
                    gatsbyImageData: IGatsbyImageData
                }
                publicURL: string
            }
        }>
    }
}
