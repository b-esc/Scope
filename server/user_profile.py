import requests
from flask import Blueprint
from flask import jsonify

user_profile = Blueprint("user_profile", __name__)

user = {
    "username": "LouNitz66",
    "location": "Montgomery IL",
    "bio": "Hey guys I'm here to say ITS ME!!!",
    # below e.g "manager of Portfolio 1" and "Owner of Salernos Stablecoins" or st
    "public portfolios": ["these", "might","be","links","icons","and roles idk"],
}


@user_profile.route("/summary")
def psummary_all():
    # any time we give back a dict do this
    y = jsonify(**user)
    print(y)
    return y
