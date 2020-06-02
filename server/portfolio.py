import requests
from flask import Blueprint

portfolio = Blueprint("portfolio", __name__)

x = {
    "BTC": 100,
    "ETH": 66,
}


@portfolio.route("/summary")
def psummary_all():
    return str(x)


@portfolio.route("/summary_single/<symbol>")
def psummary_single(symbol):
    return str(x[symbol])


@portfolio.route("/add/<symbol>/<n>")
def padd(symbol, n):
    if symbol not in x:
        x[symbol] = 0
    x[symbol] = x[symbol] + int(n)
    return str(x[symbol]) + " added to"


@portfolio.route("/remove/<symbol>/<n>")
def premove(symbol, n):
    if symbol in x:
        x[symbol] = x[symbol] - int(n)
    else:
        x[symbol] = 0

    return str(x[symbol]) + " removed"


@portfolio.route("/reset")
def preset(id_from_ticker):
    x = {
        "BTC": 0,
        "ETH": 0,
    }
    return str(x)
