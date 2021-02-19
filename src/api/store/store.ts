export const StoreConfig = {
  name: 'nomics-cache',
  version: 1,
  objectStoresMeta: [
    {
      store: 'tokens',
      storeConfig: { keyPath: 'id', autoincrement: false },
      storeSchema: [
        {
          name: 'name',
          keyPath: 'name',
          options: { unique: true },
        },
        {
          name: 'id',
          keyPath: 'id',
          options: { unique: true },
        },
        {
          name: 'symbol',
          keyPath: 'symbol',
          options: { unique: true },
        },
        {
          name: 'price',
          keyPath: 'price',
          options: { unique: false },
        },
        {
          name: 'volume',
          keyPath: 'volume',
          options: { unique: false },
        },
        {
          name: 'priceChange',
          keyPath: 'priceChange',
          options: { unique: false },
        },
        {
          name: 'logo',
          keyPath: 'logo',
          options: { unique: false },
        },
        {
          name: 'time',
          keyPath: 'time',
          options: { unique: false },
        },
      ],
    },
  ],
}
