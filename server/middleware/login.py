from flask_oauth import OAuth

oauth = OAuth()

authApp = oauth.remove_app('appName',
    base_url='https://api.twitter.com/1/',
    request_token_url='https://api.twitter.com/oauth/request_token',
    access_token_url='https://api.twitter.com/oauth/access_token',
    authorize_url='https://api.twitter.com/oauth/authenticate',
    consumer_key='<your key here>',
    consumer_secret='<your secret here>'
)
