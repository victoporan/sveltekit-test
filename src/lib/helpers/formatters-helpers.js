export function formatPrice(priceNumber)
{
    if(typeof priceNumber === 'string') {
        priceNumber = parseFloat(priceNumber);
    }
    return '$' +priceNumber.toFixed(2);
  }