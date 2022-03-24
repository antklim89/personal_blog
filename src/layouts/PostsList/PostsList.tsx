import { FC } from 'react';

import PostsItem from './PostsItem';
import { PostsListProps } from './types';


const PostsList: FC<PostsListProps> = ({ posts }) => {
    return (
        <div>
            {posts.map((post) => (
                <PostsItem {...post} key={post.id} />
            ))}
        </div>
    );
};

export default PostsList;

