import { error } from "@sveltejs/kit";
import { productsBySeason as allProducts } from "$lib/data/products-by-season";

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  // parametrul din URL trebuie să se potrivească cu numele folderului
  const season = params.season.toLowerCase();

  console.log("season", season);

  const products = allProducts[season];

  if (!products) {
    console.error("Products not found for season:", season);
    throw error(404, "Products not found");
  }

  return {
    title: season.toUpperCase() + " Products from 2025",
    products: products,
    season: season,
  };
}
