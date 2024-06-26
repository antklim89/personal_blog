import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import PostsItem from './PostsItem';
import { PostsListProps } from './types';


const PostsList: FC<PostsListProps> = ({ posts }) => {

    return (
        <Box>
            {posts.map((post) => (
                <PostsItem {...post} key={post.id} />
            ))}
        </Box>
    );
};

export default PostsList;

