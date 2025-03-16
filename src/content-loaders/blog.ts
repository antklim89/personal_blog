import { getCollection, getEntry } from 'astro:content';


export async function loadBlogs({
  limit,
  page = 1,
}: {
  limit?: number;
  page?: number;
} = {}) {
  const blogs = await getCollection('blog');
  const sortedBlogs = blogs.toSorted((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const recentBlogs = limit != null ? sortedBlogs.slice((page - 1) * limit, page * limit) : sortedBlogs;

  const totalPages = limit != null ? Math.ceil(sortedBlogs.length / limit) : 1;

  return {
    blogs: recentBlogs,
    page,
    totalPages,
  };
}

export async function loadBlog(slug: string) {
  const data = await getEntry('blog', slug);
  if (!data) throw new Error('Blog entry not found');

  return data;
}
