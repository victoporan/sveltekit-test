import { error } from '@sveltejs/kit';
import { seasons as allSeasons } from '$lib/data/seasons';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  // parametrul din URL trebuie să se potrivească cu numele folderului
  const seasonType = params.seasons.toLowerCase();

  console.log('seasonType', seasonType);

  const seasons = allSeasons[seasonType];

  if (!seasons) {
    console.error('Season not found for:', seasonType);
    throw error(404, "Season not found");
  }

  return {
    title: seasonType.toUpperCase() + ' Products from 2025',
    seasons: seasons,
    seasonType: seasonType
  };
}
