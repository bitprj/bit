from .. import api
from ..authentication.decorators import user_session_exists
from ..users.decorators import user_exists
from ..users.schemas import user_schema
from ..models import User
from flask import Blueprint
from flask_restful import Resource

# Blueprint for users
user_bp = Blueprint("user", __name__)


# Class to handle information regarding the User model
class UserData(Resource):
    # method_decorators = [user_session_exists, user_exists]

    def get(self, user_id):
        user = User.query.get(user_id)

        return user_schema.dump(user)


api.add_resource(UserData, "/api/users/<int:user_id>")
