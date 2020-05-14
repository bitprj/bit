from ..models import Tag
from functools import wraps


# Decorator to check if a tag exists
def tag_exists(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        tag = Tag.query.get(kwargs['tag_id'])

        if tag:
            return f(*args, **kwargs)
        else:
            return {
                    "message": "Tag does not exist"
                    }, 404

    return wrap
