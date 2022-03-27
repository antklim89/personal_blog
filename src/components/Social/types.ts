import { IGatsbyImage } from '~/types';


export interface SocialQuery {
    social: {
        icons: Array<{
            name: string
            link: string
            icon: IGatsbyImage
        }>
    }
}
