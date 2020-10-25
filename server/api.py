import requests
import ccxt
from flask import Blueprint

api = Blueprint("api", __name__)

binance_api = ccxt.binance()


"""
{'VET/USDT': {'ask': 0.012045,
              'askVolume': 19928.0,
              'average': None,
              'baseVolume': 924551788.0,
              'bid': 0.012041,
              'bidVolume': 1557.0,
              'change': -5.2e-05,
              'close': 0.012041,
              'datetime': '2020-10-25T14:34:52.658Z',
              'high': 0.012574,
              'info': {'askPrice': '0.01204500',
                       'askQty': '19928.00000000',
                       'bidPrice': '0.01204100',
                       'bidQty': '1557.00000000',
                       'closeTime': 1603636492658,
                       'count': 40867,
                       'firstId': 24499795,
                       'highPrice': '0.01257400',
                       'lastId': 24540661,
                       'lastPrice': '0.01204100',
                       'lastQty': '32116.00000000',
                       'lowPrice': '0.01174900',
                       'openPrice': '0.01209300',
                       'openTime': 1603550092658,
                       'prevClosePrice': '0.01209000',
                       'priceChange': '-0.00005200',
                       'priceChangePercent': '-0.430',
                       'quoteVolume': '11265442.66757400',
                       'symbol': 'VETUSDT',
                       'volume': '924551788.00000000',
                       'weightedAvgPrice': '0.01218476'},
              'last': 0.012041,
              'low': 0.011749,
              'open': 0.012093,
              'percentage': -0.43,
              'previousClose': 0.01209,
              'quoteVolume': 11265442.667574,
              'symbol': 'VET/USDT',
              'timestamp': 1603636492658,
              'vwap': 0.01218476},
 'XLM/USDT': {'ask': 0.08362,
"""
@api.route("/fetch_tickers/", methods=['POST'])
def fetch_tickers(varargs):
    print(varargs.split("/"))
    return binance_api.fetch_tickers()



@api.route("/market_summary")
def market_summary():
    r = requests.get("https://api.coinlore.net/api/global/")
    return r.text


@api.route("/top_summary/<start>/<limit>")
def top_summary(start, limit):
    r = requests.get(
        "https://api.coinlore.net/api/tickers/?start=" + start + "&limit=" + limit
    )
    return r.text


@api.route("/summary/<id_from_ticker>")
def single_ticker(id_from_ticker):
    r = requests.get("https://api.coinlore.net/api/ticker/?id=" + id_from_ticker)
    return r.text


@api.route("/exchange_summary")
def exchange_summary():
    r = requests.get("https://api.coinlore.net/api/exchanges/")
    return r.text


@api.route("/exchange_summary_single/<id>")
def exchange_summary_single(id):
    r = requests.get("https://api.coinlore.net/api/exchanges/?id=" + id)
    return r.text
