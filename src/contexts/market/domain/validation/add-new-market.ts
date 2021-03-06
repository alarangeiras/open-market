export const addNewMarketRequestSchema: any = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    neighborhood: { type: 'string' },
    district: { type: 'string' },
    region: { type: 'string' },
  },
  required: ['name', 'neighborhood', 'district', 'region'],
};
