import { HStack } from '@chakra-ui/react';
import { FC, useEffect, useRef } from 'react';
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
    const url = process.env.URL || 'localhost:3000';
    const isLoad = useRef(false);
    
    useEffect(() => {
        if (location.href) isLoad.current = true;
    });

    if (!isLoad) return null;
    return (
        <HStack sx={{ svg: { width: 12 } }}>
            <VKShareButton 
                image={`${url}${image}`} 
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

