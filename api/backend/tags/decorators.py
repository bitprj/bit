from ..models import Tag
from functools import wraps
from ..tags.schemas import tag_form_schema
from flask import request


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


# Decorator to check if data in form is valid
def validate_tag_form(f):
    
    @wraps(f)
    def wrap(*args, **kwargs):
        form_data = request.get_json()
        errors = tag_form_schema.validate(form_data)
        
        if errors:
            return {
                "message": "Missing or sending incorrect data to create a classroom. Double check the JSON data that it has everything needed to create a Tag."
            }, 422
        else: 
            return f(*args, **kwargs)

    return wrap
