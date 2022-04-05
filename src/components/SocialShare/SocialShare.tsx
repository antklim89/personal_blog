import { HStack } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
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
    const [isLoad, setIsLoad] = useState(false);
    
    useEffect(() => {
        if (location.href && !isLoad) setIsLoad(true);
    });

    if (!isLoad) return null;
    return (
        <HStack sx={{ svg: { width: 12 } }}>
            <VKShareButton 
                image={`${location.origin}${image}`} 
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

