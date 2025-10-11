import { error } from '@sveltejs/kit';
import { productsByType as allProducts } from '$lib/data/products-by-type';
import { banners } from '$lib/data/banners';

/** @type {import('./$types').PageLoad} */
export function load({ params })
{

    const productType = params.product_type;

    console.log('productType', productType);

    const products = allProducts[productType]; 
    const banner = banners[productType];

    console.log(banner);


    return {
        title: productType.toUpperCase() + ' Products from 2025',
        products: products,
        banner: banner,
        productType: productType,
    }
}

