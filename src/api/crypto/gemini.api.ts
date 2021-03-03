import GeminiAPI from 'gemini-api'
const key: any = process.env.REACT_APP_MASTER_GEMINI_API_KEY
const secret: any = process.env.REACT_APP_MASTER_GEMINI_SECRET

const gemini = new GeminiAPI({
  key,
  secret,
  // sandbox: false,
  account: 'master',
})

export const getBalances = async () => {
  const balances = await gemini.getMyAvailableBalances()
  console.log('balances: ', balances)
}

export const getPastTrades = async (symbol) => {
  const trades = await gemini.getMyPastTrades(symbol)
  console.log('trades: ', trades)
}

export const getTradeHistory = async (symbol) => {
  const trades = await gemini.getTradeHistory(symbol)
  console.log('trades: ', trades)
}
