import { buildContentGroupHash } from '@farfetch/blackout-core/contents/utils';

export const commercePagesQuery = {
  type: 'LISTING',
  gender: 0,
  brand: 5030844,
  category: 136643,
};

export const slug = 'woman/gucci';
const contentQuery = {
  codes: slug,
  contentTypeCode: 'commerce_pages',
};

export const commercePagesHash = buildContentGroupHash(contentQuery);

export const mockCommercePages = {
  number: 1,
  totalPages: 1,
  totalItems: 2,
  entries: [
    {
      publicationId: 'dc9c0c95-9485-45c2-a76c-6923bb39b544',
      versionId: '78f1922d-0ef1-46ed-b02c-ca541d0a0d80',
      spaceCode: 'website',
      contentTypeCode: 'commerce_pages',
      environmentCode: 'live',
      code: 'LISTING_gender_0/brand_5030844/category_136643',
      target: {
        contentzone: '10674',
      },
      metadata: {
        custom: {
          none: '',
          id: '',
          gender: '0',
          brand: '5030844',
          category: '136643',
          slug: '',
          priceType: '0',
          sku: '',
          type: 'LISTING',
          eventDate: '0001-01-01T00:00:00Z',
        },
      },
      publicationDate: '2021-08-20T15:40:39.0000132Z',
      components: [
        {
          type: 'custom',
          fields: {
            title: {
              type: 'text',
              value: 'Commerce Page',
              name: 'test',
              displayOptions: {},
            },
            content: {
              type: 'html',
              name: 'Listing Page Description 1',
              displayOptions: {},
              content:
                '<p>What was once a keepsake from an island getaway has now become a permanent fixture in your jewellery collection thanks to Gigi Clozeau. Browsing her collection of anklets will keep you in the holiday mood all year round, so much so, you&#39;ll want one in every colour for every destination. Crafted from 18K gold, these delicate chains are perfectly accented with the addition of her signature resin beads in a mix of tropical colours. Browse Gigi Clozeau body jewellery below to be <em>vacay</em> ready at all times.</p>',
            },
          },
          customType: 'article',
          name: 'article',
          displayOptions: {},
        },
      ],
    },
    {
      publicationId: '264cb62c-04fe-4d54-a347-a9299568a227',
      versionId: 'ce6b7c20-93cf-4f44-b80e-8447d0320f47',
      spaceCode: 'website',
      contentTypeCode: 'commerce_pages',
      environmentCode: 'live',
      code: 'LISTING_gender_0/brand_5030844',
      target: {
        contentzone: '10674',
      },
      metadata: {
        custom: {
          none: '',
          id: '',
          gender: '0',
          brand: '5030844',
          category: '',
          slug: '',
          priceType: '',
          sku: '',
          type: 'LISTING',
          eventDate: '0001-01-01T00:00:00Z',
        },
      },
      publicationDate: '2021-08-20T15:38:20.6658783Z',
      components: [
        {
          type: 'custom',
          fields: {
            title: {
              type: 'text',
              value: 'Commerce Page 2',
              name: 'test',
              displayOptions: {},
            },
            content: {
              type: 'html',
              name: 'Listing Page Description 2',
              displayOptions: {},
              content:
                '<h2>Whitelabel was born out of a deep love of fashion and a profound belief that fashion is an essential expression of individuality and what makes each of us unique.</h2>',
            },
          },
          customType: 'simpleText',
          name: 'simpleText',
          displayOptions: {},
        },
        {
          type: 'custom',
          fields: {
            title: {
              type: 'text',
              value: 'Commerce Page 2',
              name: 'test',
              displayOptions: {},
            },
            content: {
              type: 'html',
              name: 'Listing Page Description 2',
              displayOptions: {},
              content:
                '<p>What was once a keepsake from an island getaway has now become a permanent fixture in your jewellery collection thanks to Gigi Clozeau. Browsing her collection of anklets will keep you in the holiday mood all year round, so much so, you&#39;ll want one in every colour for every destination. Crafted from 18K gold, these delicate chains are perfectly accented with the addition of her signature resin beads in a mix of tropical colours. Browse Gigi Clozeau body jewellery below to be <em>vacay</em> ready at all times.</p>',
            },
          },
          customType: 'article',
          name: 'article',
          displayOptions: {},
        },
      ],
    },
  ],
};

export const expectedCommercePagesNormalizedPayload = {
  entities: {
    contentGroups: {
      [commercePagesHash]: {
        hash: commercePagesHash,
        number: 1,
        totalPages: 1,
        totalItems: 1,
        entries: [mockCommercePages.entries[0].publicationId],
      },
    },
    contents: {
      [mockCommercePages.entries[0].publicationId]: {
        ...mockCommercePages.entries[0],
      },
    },
  },
  contents: {
    isLoading: {
      [commercePagesHash]: false,
    },
    error: {},
  },
};

export const defaultStrategyResult = {
  number: 1,
  totalPages: 1,
  totalItems: 1,
  entries: [
    {
      ...mockCommercePages.entries[0],
      ranking: 1000010110,
    },
  ],
};

export const mergeStrategyResult = {
  number: 1,
  totalPages: 1,
  totalItems: 1,
  entries: [
    {
      ...mockCommercePages.entries[0],
      components: [].concat(
        mockCommercePages.entries[0].components,
        mockCommercePages.entries[1].components[0],
      ),
    },
  ],
};

export const mockCommercePagesWithPages = {
  number: 1,
  totalPages: 2,
  totalItems: 1,
  entries: [
    {
      ...mockCommercePages.entries[0],
    },
  ],
};

export const mockCommercePagesLoadingState = {
  entities: {},
  contents: {
    isLoading: {
      [commercePagesHash]: true,
    },
    error: {},
  },
};

export const mockCommercePagesErrorState = {
  entities: {},
  contents: {
    isLoading: {
      [commercePagesHash]: false,
    },
    error: {
      [commercePagesHash]: {
        message: 'Error',
      },
    },
  },
};
