from .. import api
from flask import Blueprint
from flask_restful import Resource

# Blueprint for home
home_bp = Blueprint("home", __name__)


class Home(Resource):
    def get(self):
        return {"ping": "pong"}


api.add_resource(Home, "/ping")
