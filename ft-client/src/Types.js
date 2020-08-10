// @flow
export type Coin = {
    rank: number,
    symbol: string,
    name: string,
    price: number,
    marketCap: number,
    volume24hr: number,
    change24hr: number,
    change7days: number,
    change1month: number,
}

export type CoinPair = {
    coinPairStr: string, // 'BTC/LTC'
    change24hr: number,
}