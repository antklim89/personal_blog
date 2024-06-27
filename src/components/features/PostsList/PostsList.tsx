import { Container } from '@chakra-ui/react';
import { FC } from 'react';

import PostsItem from './PostsItem';
import { PostsListProps } from './types';


const PostsList: FC<PostsListProps> = ({ posts }) => {

    return (
        <Container>
            {posts.map((post) => (
                <PostsItem {...post} key={post.id} />
            ))}
        </Container>
    );
};

export default PostsList;

