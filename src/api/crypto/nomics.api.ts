import axios from 'axios'
import Nomics from 'nomics'
const apiKey: any = process.env.REACT_APP_NOMICS_API_KEY
const nomics = new Nomics({
  apiKey,
})

export const getNomicsTicker = async (
  ids = ['BTC', 'ETH', 'ORN', 'AAVE', 'Uniswap', 'EGLD', 'XRM']
) => {
  const currencies = await nomics.currenciesTicker({
    ids,
  })

  return currencies
}
// gatsby-source-rest-api
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
export const getSparkline = async (token, timestamp) => {
  const url = `https://api.nomics.com/v1/currencies/sparkline?key=${apiKey}&ids=${token}&start=${timestamp}`
  return await axios(url).catch((err) => null)
}
export const getPriceHistory = async (token, timestamp) => {
  const current = await getNomicsTicker([token]).then((res) => res[0])
  console.log('current: ', current)
  // const history = await axios(
  //   `https://api.nomics.com/v1/exchange-rates/history?key=${apiKey}&currency=${token}&start=${timestamp}`
  // ).catch((err) => null)
  await sleep(2000)
  const sparkline = await getSparkline(token, timestamp)
    .then(({ data }: any) => data[0])
    .catch((err) => null)
  console.log('sparkline: ', sparkline)
  if (sparkline && current) {
    const { price } = current
    const currentPrice = parseFloat(price)
    const { timestamps, prices } = sparkline
    const purchasePrice = parseFloat(prices[0])
    const delta = currentPrice - purchasePrice
    return {
      currentPrice,
      purchasePrice,
      delta,
    }
  }
  return null
}
