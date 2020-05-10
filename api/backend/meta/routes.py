from .. import api
from flask import Blueprint, session
from flask_restful import Resource

# Blueprint for metas
meta_bp = Blueprint("meta", __name__)


# Class to return the meta meta data
class MetaData(Resource):
    def get(self):
        if "profile" in session:
            return session["profile"]
        else:
            return {}, 401


api.add_resource(MetaData, "/api/meta")
