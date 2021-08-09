
export const addNewMarketRequestSchema: any =
  {
    type: 'object',
    properties: {
      name: { type: 'string' },
      neighbor: { type: 'string' },
      district: { type: 'string' },
      region: { type: 'string' },
    },
    required: ['name', 'neighbor', 'district', 'region'],
  };
