import { getCollection, getEntry } from 'astro:content';


export async function loadPosts({
  limit,
  page = 1,
}: {
  limit?: number;
  page?: number;
} = {}) {
  const posts = await getCollection('blog');
  const sortedPosts = posts.toSorted((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const recentPosts = limit != null ? sortedPosts.slice((page - 1) * limit, page * limit) : sortedPosts;

  const totalPages = limit != null ? Math.ceil(sortedPosts.length / limit) : 1;

  return {
    posts: recentPosts,
    page,
    totalPages,
  };
}

export async function loadPost(slug: string) {
  const data = await getEntry('blog', slug);
  if (!data) throw new Error('Blog entry not found');

  return data;
}
