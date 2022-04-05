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


const SocialShare: FC<SocialShareProps> = ({ title, image }) => {
    return (
        <HStack sx={{ svg: { width: 12 } }}>
            <VKShareButton 
                image={`${process.env.URL || 'localhost:3000'}${image}`} 
                title={title} 
                url={location.href} 
            >
                <VKIcon />
            </VKShareButton>
            <EmailShareButton 
                subject={title}
                url={location.href}
            >
                <EmailIcon />
            </EmailShareButton>
            <FacebookShareButton 
                title={title}
                url={location.href}
            >
                <FacebookIcon />
            </FacebookShareButton>
            <RedditShareButton 
                title={title}
                url={location.href}
            >
                <RedditIcon />
            </RedditShareButton>
        </HStack>
    );
};

export default SocialShare;

