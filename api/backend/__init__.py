from ..backend.config import *
from flask import Flask
from flask_github import GitHub
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)

app.config["PROPAGATE_EXCEPTIONS"] = True
app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

api = Api(app)
db = SQLAlchemy(app)
github = GitHub(app)

from ..backend.home.routes import home_bp

app.register_blueprint(home_bp)
