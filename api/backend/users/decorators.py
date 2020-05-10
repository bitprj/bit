from ..models import User
from functools import wraps


# Decorator to check if the user is logged in
def user_exists(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        user = User.query.get(kwargs["user_id"])

        if user:
            return f(*args, **kwargs)
        else:
            return {
                       "message": "User does not exist"
                   }, 404

    return wrap
