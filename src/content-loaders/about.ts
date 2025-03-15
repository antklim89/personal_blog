import { getEntry } from 'astro:content';


export async function loadAbout() {
  const data = await getEntry('about', 'about');
  if (!data) throw new Error('About entry not found');

  return data;
}
