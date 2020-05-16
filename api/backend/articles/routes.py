from .. import api, db
from ..articles.decorators import article_exists, valid_article_form
from ..articles.utils import create_article, update_article
from ..articles.schemas import article_schema, articles_schema 
from ..models import Article
from flask import Blueprint, request
from flask_restful import Resource

# Blueprint for articles
articles_bp = Blueprint("articles", __name__)


# Class to handle information regarding the Article model
class ArticleCreate(Resource):
    
    @valid_article_form
    def post(self):
        form_data = request.get_json()
        article = create_article(form_data)

        db.session.add(article)
        db.session.commit()

        return {"message": "Successfully created Article"}, 201

    # Display all the articles up to a limit of 15
    def get(self):

        #Check if the Article table has articles before printing upto 15 articles
        if Article.query.first():
            article = Article.query.limit(15)
            return articles_schema.dump(article, default=str)

        return {"message": "No articles present"}, 404

class ArticleCRUD(Resource):

    @valid_article_form
    @article_exists
    def put(self, article_id):
        article = Article.query.get(article_id)
        form_data = request.get_json()

        update_article(article, form_data)

        db.session.commit()

        return {"message": "Article successfully updated"}, 200

    @article_exists
    def delete(self, article_id):
        article = Article.query.get(article_id)
        form_data = request.get_json()
        
        db.session.delete(article)
        db.session.commit()

        return {"message": "Article successfully deleted"}, 200


    @article_exists
    def get(self, article_id):
        article = Article.query.get(article_id)

        return article_schema.dump(article)

# Creates the routes for the classes
api.add_resource(ArticleCreate, "/api/articles")
api.add_resource(ArticleCRUD, "/api/articles/<int:article_id>")
