export FN_AUTH_REDIRECT_URI=http://localhost:8040/google/auth
export FN_BASE_URI=http://localhost:8040
export FN_CLIENT_ID='331794733227-345kpdvpum2n4eapj08l3qrron4v8aqm.apps.googleusercontent.com'
export FN_CLIENT_SECRET='bPvPw-QSwJ4zJZDhd_LIyNwY'
export FLASK_APP=server.py
export FLASK_DEBUG=1
export FN_FLASK_SECRET_KEY='louienits66'
# export GOOGLE_APPLICATION_CREDENTIALS=auth/client_secret_331794733227-345kpdvpum2n4eapj08l3qrron4v8aqm.apps.googleusercontent.com.json
python3 -m flask run -p 8040
