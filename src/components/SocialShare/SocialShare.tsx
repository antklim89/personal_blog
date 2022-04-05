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
                url="https://personal-blog-dev.netlify.app/posts/ffb85fe6-a6ff-54c6-a5e8-bdca79c6630d" 
            >
                <VKIcon />
            </VKShareButton>
            <EmailShareButton 
                subject={title}
                url="https://personal-blog-dev.netlify.app/posts/ffb85fe6-a6ff-54c6-a5e8-bdca79c6630d"
            >
                <EmailIcon />
            </EmailShareButton>
            <FacebookShareButton 
                title={title}
                url="https://personal-blog-dev.netlify.app/posts/ffb85fe6-a6ff-54c6-a5e8-bdca79c6630d"
            >
                <FacebookIcon />
            </FacebookShareButton>
            <RedditShareButton 
                title={title}
                url="https://personal-blog-dev.netlify.app/posts/ffb85fe6-a6ff-54c6-a5e8-bdca79c6630d"
            >
                <RedditIcon />
            </RedditShareButton>
        </HStack>
    );
};

export default SocialShare;

