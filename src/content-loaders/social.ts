import { getEntry } from 'astro:content';


export async function loadSocial() {
  const data = await getEntry('social', 'social');
  if (!data) throw new Error('Social entry not found');

  return data.data.socials;
}
