"""
from flask import Flask
from .routes import bp


def init_server(config=None):
    server = Flask(__name__)
    if config is not None:
        if isinstance(config, dict):
            server.config.update(config)
        elif config.endswith(".py"):
            server.config.from_pyfile(config)
    register(server)
    return server


def register(server):
    server.register_blueprint(bp, url_prefix="")

"""

import functools
import json
import os
import flask
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
server.secret_key = os.environ.get("FN_FLASK_SECRET_KEY", default=False)

server.register_blueprint(google.testApp)


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
