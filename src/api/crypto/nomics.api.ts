import Nomics from 'nomics'

const nomics = new Nomics({
  apiKey: '5582bec1664b05044a79f15385c4213a',
})

export const getNomicsTicker = async () => {
  const currencies = await nomics.currenciesTicker()
  console.log('currencies: ', currencies)
  return currencies
}
// gatsby-source-rest-api
