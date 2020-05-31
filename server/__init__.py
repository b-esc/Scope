from flask import Flask
import tritcask

server = Flask(__name__)
db = tritcask.Tritcask("/tmp/Scope")

from server import routes
