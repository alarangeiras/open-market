import { Validation } from '../../data/ports/validation-port';
import { Market } from '../model/market';

export const addNewMarketRequestSchema: Validation.Schema<Market> = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    name: { type: 'string' },
    neighbor: { type: 'string' },
    district: { type: 'string' },
    region: { type: 'string' },
  },
  required: ['name', 'neighbor', 'district', 'region'],
};
