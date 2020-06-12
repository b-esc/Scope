import requests
from flask import Blueprint
from flask import jsonify

portfolio = Blueprint("portfolio", __name__)

x = {
    "90": 100,
    "80": 66,
}


@portfolio.route("/summary")
def psummary_all():
    y = jsonify(**x)
    print(y)
    return y


@portfolio.route("/summary_single/<uid>")
def psummary_single(uid):
    return str(x[uid])


@portfolio.route("/add/<uid>/<n>")
def padd(uid, n):
    if uid not in x:
        x[uid] = 0
    x[uid] = x[uid] + int(n)
    return str(x[uid]) + " added to"


@portfolio.route("/remove/<uid>/<n>")
def premove(uid, n):
    if uid in x:
        x[uid] = x[uid] - int(n)
    else:
        x[uid] = 0

    return str(x[uid]) + " removed"


@portfolio.route("/reset")
def preset(id_from_ticker):
    x = {
        "90": 0,
        "80": 0,
    }
    return str(x)
