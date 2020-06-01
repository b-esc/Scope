import requests
from flask import Blueprint

api = Blueprint("api", __name__)


@api.route("/market_summary")
def market_summary():
    test_req = requests.get("https://api.coinlore.net/api/global/")
    return test_req.text
