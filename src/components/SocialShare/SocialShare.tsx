import { HStack } from '@chakra-ui/react';
import { FC } from 'react';
import { 
    VKShareButton,
    VKIcon,
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    RedditIcon,
    RedditShareButton,
} from 'react-share';

import { SocialShareProps } from './types';


const SocialShare: FC<SocialShareProps> = ({ title, imageSrc, postSrc }) => {
    const url = process.env.URL || 'localhost:3000';
    console.debug('`${url}${postSrc}`: \n', `${url}${postSrc}`);
    return (
        <HStack sx={{ svg: { width: 12 } }}>
            <VKShareButton 
                image={`${url}${imageSrc}`} 
                title={title} 
                url={`${url}${postSrc}`} 
            >
                <VKIcon />
            </VKShareButton>
            <EmailShareButton 
                subject={title}
                url={`${url}${postSrc}`}
            >
                <EmailIcon />
            </EmailShareButton>
            <FacebookShareButton 
                title={title}
                url={`${url}${postSrc}`}
            >
                <FacebookIcon />
            </FacebookShareButton>
            <RedditShareButton 
                title={title}
                url={`${url}${postSrc}`}
            >
                <RedditIcon />
            </RedditShareButton>
        </HStack>
    );
};

export default SocialShare;

