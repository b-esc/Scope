from authlib.client import OAuth2Session
import google.oauth2.credentials

import googleapiclient.discovery
import os
import flask
import functools

ACCESS_URI = "https://www.googleapis.com/oauth2/v4/token"
AUTH_URL = (
    "https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent"
)
AUTH_SCOPE = "openid email profile"

AUTH_REDIRECT_URI = os.environ.get("FN_AUTH_REDIRECT_URI", default=False)
BASE_URI = os.environ.get("FN_BASE_URI", default=False)
CLIENT_ID = os.environ.get("FN_CLIENT_ID", default=False)
CLIENT_SECRET = os.environ.get("FN_CLIENT_SECRET", default=False)

AUTH_TKEY = "auth_token"
AUTH_SKEY = "auth_state"

testApp = flask.Blueprint("google_auth", __name__)


def logged_in():
    if AUTH_TKEY in flask.session:
        return True
    return False


def gen_credentials():
    if not logged_in():
        raise Exception("You have to log in")

    tokens = flask.session[AUTH_TKEY]

    return google.oauth2.credentials.Credentials(
        tokens["access_token"],
        refresh_token=tokens["refresh_token"],
        client_id=CLIENT_ID,
        client_secret=CLIENT_SECRET,
        token_uri=ACCESS_URI,
    )


def get_user_info():
    creds = gen_credentials()
    print(" \n\n LOU \n\n ", creds)

    client = googleapiclient.discovery.build("oauth2", "v2", credentials=creds)

    return client.userinfo().get().execute()


def x_cache(view):
    @functools.wraps(view)
    def x_cache_impl(*args, **kwargs):
        res = flask.make_response(view(*args, **kwargs))
        res.headers["Cache-Control"] = "no-store, no-cache, must-revalidate, max-age=0"
        res.headers["Pragma"] = "no-cache"
        res.headers["Expires"] = "-1"
        return res

    return functools.update_wrapper(x_cache_impl, view)


@testApp.route("/login/google")
@x_cache
def google_login():
    session = OAuth2Session(
        CLIENT_ID, CLIENT_SECRET, scope=AUTH_SCOPE, redirect_uri=AUTH_REDIRECT_URI
    )
    uri, state = session.authorization_url(AUTH_URL)
    flask.session[AUTH_SKEY] = state
    flask.session.permanent = True

    return flask.redirect(uri, code=302)


# 331794733227-345kpdvpum2n4eapj08l3qrron4v8aqm.apps.googleusercontent.com
# bPvPw-QSwJ4zJZDhd_LIyNwY
@testApp.route("/google/auth")
@x_cache
def google_auth_redirect():
    req_state = flask.request.args.get("state", default=None, type=None)

    if req_state != flask.session[AUTH_SKEY]:
        response = flask.make_response("Invalid state param", 401)
        return response
    session = OAuth2Session(
        CLIENT_ID,
        CLIENT_SECRET,
        scope=AUTH_SCOPE,
        state=flask.session[AUTH_SKEY],
        redirect_uri=AUTH_REDIRECT_URI,
    )
    tokens = session.fetch_access_token(
        ACCESS_URI, authorization_response=flask.request.url
    )
    flask.session[AUTH_TKEY] = tokens

    return flask.redirect(BASE_URI, code=302)


@testApp.route("/logout/google")
@x_cache
def google_logout():
    flask.session.pop(AUTH_TKEY, None)
    flask.session.pop(AUTH_SKEY, None)
    return flask.redirect(BASE_URI, code=302)
