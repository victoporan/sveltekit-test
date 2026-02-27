import { productsBySeason } from "$lib/data/products-by-season";
import { productsByType } from "$lib/data/products-by-type";

const routeByGroup = {
  autumn: "/collection/autumn",
  winter: "/collection/winter",
  spring: "/collection/spring",
  summer: "/collection/summer",
  watches: "/products/watches",
  rings: "/products/rings",
  bracelets: "/products/bracelets",
  necklaces: "/products/necklaces",
  earrings: "/products/earrings",
};

function normalize(list, group) {
  return (list ?? []).map((p) => ({
    ...p,
    id: String(p.id),
    group,
    route: routeByGroup[group],
  }));
}

export function getAllProducts() {
  return [
    ...normalize(productsBySeason.autumn, "autumn"),
    ...normalize(productsBySeason.winter, "winter"),
    ...normalize(productsBySeason.spring, "spring"),
    ...normalize(productsBySeason.summer, "summer"),
    ...normalize(productsByType.watches, "watches"),
    ...normalize(productsByType.rings, "rings"),
    ...normalize(productsByType.bracelets, "bracelets"),
    ...normalize(productsByType.necklaces, "necklaces"),
    ...normalize(productsByType.earrings, "earrings"),
  ];
}
