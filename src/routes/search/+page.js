import { getAllProducts } from "$lib/data/all-products";

export function load({ url }) {
  const q = (url.searchParams.get("q") || "").trim().toLowerCase();
  const all = getAllProducts();

  const results = q.length < 2 ? [] : all.filter((p) => (p.name || "").toLowerCase().includes(q)).slice(0, 60);

  return { q, results };
}
