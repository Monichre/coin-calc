export const StoreConfig: any = {
  name: 'nomics-cache',
  version: 1,
  objectStoresMeta: [
    {
      store: 'tokens',
      storeConfig: { keyPath: 'id', autoincrement: true },
      storeSchema: [
        {
          name: 'name',
          keypath: 'name',
          options: { unique: true },
        },
        {
          name: 'id',
          keypath: 'id',
          options: { unique: true },
        },
        {
          name: 'symbol',
          keypath: 'symbol',
          options: { unique: true },
        },
        {
          name: 'price',
          keypath: 'price',
          options: { unique: false },
        },
        {
          name: 'volume',
          keypath: 'volume',
          options: { unique: false },
        },
        {
          name: 'priceChange',
          keypath: 'priceChange',
          options: { unique: false },
        },
        {
          name: 'logo',
          keypath: 'logo',
          options: { unique: false },
        },
        {
          name: 'time',
          keypath: 'time',
          options: { unique: false },
        },
      ],
    },
  ],
}
