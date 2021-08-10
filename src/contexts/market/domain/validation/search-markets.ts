export const searchMarketsRequestSchema: any = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    neighborhood: { type: 'string' },
    district: { type: 'string' },
    region: { type: 'string' },
  },
};
