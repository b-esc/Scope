import requests
from flask import Blueprint

api = Blueprint("api", __name__)


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
