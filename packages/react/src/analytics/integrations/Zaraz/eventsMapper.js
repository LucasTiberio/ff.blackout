import { eventTypes, pageTypes } from '@farfetch/blackout-core/analytics';
import { ZARAZ_ECOMMERCE_EVENTS } from './constants';

export default {
  [eventTypes.PRODUCT_ADDED_TO_CART]: data => {
    const eventProperties = data.properties;

    return [
      'ecommerce',
      ZARAZ_ECOMMERCE_EVENTS.PRODUCT_ADDED,
      {
        currency: eventProperties.currency,
        name: eventProperties.name,
        price: eventProperties.price,
        product_id: `${eventProperties.id}`, // Zaraz's product_id is a string
      },
    ];
  },
  [eventTypes.PRODUCT_ADDED_TO_WISHLIST]: data => {
    const eventProperties = data.properties;

    return [
      'ecommerce',
      ZARAZ_ECOMMERCE_EVENTS.PRODUCT_ADDED_TO_WISHLIST,
      {
        category: eventProperties.category,
        currency: eventProperties.currency,
        name: eventProperties.name,
        price: eventProperties.price,
        product_id: `${eventProperties.id}`, // Zaraz's product_id is a string
      },
    ];
  },
  [eventTypes.PRODUCT_VIEWED]: data => {
    const eventProperties = data.properties;

    return [
      'ecommerce',
      ZARAZ_ECOMMERCE_EVENTS.PRODUCT_VIEWED,
      {
        currency: eventProperties.currency,
        name: eventProperties.name,
        price: eventProperties.price,
        product_id: `${eventProperties.id}`, // Zaraz's product_id is a string
      },
    ];
  },
  [pageTypes.SEARCH]: data => {
    const eventProperties = data.properties;

    return [
      'ecommerce',
      ZARAZ_ECOMMERCE_EVENTS.PRODUCTS_SEARCHED,
      {
        price: 0, // This was required by Zaraz
        currency: eventProperties.currency,
        products: eventProperties.products?.map(product => ({
          product_id: `${product.id}`, // Zaraz's product_id is a string
        })),
        query: eventProperties.searchQuery,
      },
    ];
  },
};