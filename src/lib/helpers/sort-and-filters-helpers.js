export function sortLowToHigh(products)
{
    if(typeof products[0].price === 'string') {
        products = products.map(product => ({ ...product, price: parseFloat(product.price) }));
    }
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);

    return sortedProducts;
  }

  export function sortHighToLow(products) {
    if(typeof products[0].price === 'string') {
        products = products.map(product => ({ ...product, price: parseFloat(product.price) }));
    }
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);

    return sortedProducts;
  }

  export function sortNewest(products) {
    const sortedProducts = [...products].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return sortedProducts;
  }

  export function sortRecommended(products) {
    const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);

    return sortedProducts;
  }

  