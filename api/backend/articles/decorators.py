from ..models import Article
from functools import wraps
from ..articles.schemas import article_form_schema
from flask import request

# Decorator to check if the article exists
def article_exists(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        article = Article.query.get(kwargs["article_id"])

        if article:
            return f(*args, **kwargs)
        else:
            return {
                       "message": "Article does not exist"
                   }, 404

    return wrap


# Decorator to check if a article form data is valid
def valid_article_form(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        form_data = request.get_json()
        errors = article_form_schema.validate(form_data)

        # If form data is not validated by the article_form_schema, then return a 500 error
        # else create the article and add it to the database
        if errors:
            return {
                       "message": "Missing or sending incorrect data to create a article. Double check the JSON data that it has everything needed to create a classroom."
                   }, 500
        else:
            return f(*args, **kwargs)

    return wrap
