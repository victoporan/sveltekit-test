import { productsBySeason } from "$lib/data/products-by-season";
import { error } from "@sveltejs/kit";

export function load({ params }) {
  const { season, id } = params;

  const list = productsBySeason[season];
  if (!list) throw error(404, "Season not found");

  const product = list.find((p) => String(p.id) === String(id));
  if (!product) throw error(404, "Product not found");

  return { product };
}
