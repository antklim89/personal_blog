import { IGatsbyImage } from '~/types';


export interface HeroQuery {
    hero: {
        frontmatter: {
            background: {
                childImageSharp: {
                    resize: {
                        src: string
                    }
                }
            }
            portrait: IGatsbyImage
        }
        excerpt: string
    }
}
