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

export const SampleLineData : Array<Object> = [
    { time: '2014-01-01', value: 80.01 },
    { time: '2015-01-15', value: 56.63 },
    { time: '2016-01-26', value: 26.64 },
    { time: '2016-03-01', value: 80.01 },
    { time: '2017-01-01', value: 80.01 },
    { time: '2017-01-15', value: 96.63 },
    { time: '2017-01-26', value: 76.64 },
    { time: '2017-03-01', value: 80.01 },
    { time: '2017-03-15', value: 96.63 },
    { time: '2019-03-26', value: 76.64 },
    { time: '2019-04-01', value: 81.89 },
    { time: '2019-04-05', value: 74.43 },
    { time: '2019-04-10', value: 80.01 },
    { time: '2019-04-15', value: 96.63 },
    { time: '2019-04-18', value: 76.64 },
    { time: '2019-04-19', value: 81.89 },
    { time: '2019-04-20', value: 74.43 },
]