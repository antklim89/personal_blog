import { getEntry } from 'astro:content';


export async function loadHero() {
  const data = await getEntry('hero', 'hero');
  if (!data) throw new Error('Hero entry not found');

  return data;
}
