import { productsByType } from "$lib/data/products-by-type";
import { error } from "@sveltejs/kit";

export function load({ params }) {
  const { product_type, id } = params;

  const list = productsByType[product_type];
  if (!list) throw error(404, "Category not found");

  const product = list.find((p) => String(p.id) === String(id));
  if (!product) throw error(404, "Product not found");

  return { product };
}
