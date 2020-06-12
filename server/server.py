import functools
import json
import os
import flask
from flask_cors import CORS
from api import api
from portfolio import portfolio
from user_profile import user_profile
from authlib.client import OAuth2Session
import google.oauth2.credentials
import googleapiclient.discovery
from auth import google


print(
    "Credendtials from environ: {}".format(
        os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")
    )
)

server = flask.Flask(__name__)
# Not worth fighting,
# server.config['JSON_SORT_KEYS'] = False
server.secret_key = os.environ.get("FN_FLASK_SECRET_KEY", default=False)

# prefixes for endpoint rq's made to this server
server.register_blueprint(google.testApp)
server.register_blueprint(api, url_prefix="/api")
server.register_blueprint(portfolio, url_prefix="/portfolio")
server.register_blueprint(user_profile, url_prefix="/user_profile")

CORS(server)

@server.route("/")
def index():
    if google.logged_in():
        user_info = google.get_user_info()
        return (
            "<div>Logged In User: "
            + user_info["given_name"]
            + "<div><pre>"
            + json.dumps(user_info, indent=4)
            + "</pre>"
        )

    return "You are not logged in."
