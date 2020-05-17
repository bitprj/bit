from .. import api, db
from ..articles.decorators import article_exists, valid_article_form, article_table_empty
from ..articles.utils import create_article, update_article
from ..articles.schemas import article_schema, articles_schema 
from flask import Blueprint, request
from flask_restful import Resource
from ..models import Article

# Blueprint for articles
articles_bp = Blueprint("articles", __name__)


# Class to handle information regarding the Article model
class Articles(Resource):

    # Function to create an article
    @valid_article_form
    def post(self):
        form_data = request.get_json()
        article = create_article(form_data)

        db.session.add(article)
        db.session.commit()

        return {"message": "Successfully created Article"}, 201

    # Function to display all the articles up to a limit of 15 
    @article_table_empty
    def get(self):
        article = Article.query.limit(15)
        return articles_schema.dump(article, default=str)


class ArticleCRUD(Resource):

    # Function to edit an article 
    @valid_article_form
    @article_exists
    def put(self, article_id):
        article = Article.query.get(article_id)
        form_data = request.get_json()
        update_article(article, form_data)

        db.session.commit()

        return {"message": "Article successfully updated"}, 200

    # Function to delete an article 
    @article_exists
    def delete(self, article_id):
        article = Article.query.get(article_id)

        db.session.delete(article)
        db.session.commit()

        return {"message": "Article successfully deleted"}, 200

    # Function to display an article 
    @article_exists
    def get(self, article_id):
        article = Article.query.get(article_id)

        return article_schema.dump(article)

# Creates the routes for the classes
api.add_resource(Articles, "/api/articles")
api.add_resource(ArticleCRUD, "/api/articles/<int:article_id>")