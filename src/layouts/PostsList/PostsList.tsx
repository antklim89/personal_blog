import { Container } from '@chakra-ui/react';
import { FC, useEffect } from 'react';

import PostsItem from './PostsItem';
import { PostsListProps } from './types';


const PostsList: FC<PostsListProps> = ({ posts }) => {
    useEffect(() => { document.body.scrollTop = 0; }, []);

    return (
        <Container>
            {posts.map((post) => (
                <PostsItem {...post} key={post.id} />
            ))}
        </Container>
    );
};

export default PostsList;

