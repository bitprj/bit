from .. import api, db
from flask import Blueprint, request, session
from flask_restful import Resource
from ..models import Tag, User
from ..tags.decorators import tag_exists, validate_tag_form
from ..tags.schemas import tag_schema, tags_schema, tag_form_schema
from ..tags.utils import create_tag, update_tag

# Blueprint for tags
tag_bp = Blueprint("tags", __name__)


# Class to fetch and create tag
class Tags(Resource):
    # Create Tag 
    @validate_tag_form
    def post(self):
        form_data = request.get_json()
        tag = create_tag(form_data)

        db.session.add(tag)
        db.session.commit()
        print(tag)

        return {
            "message": "Tag sucessfully created"
        }, 201


    # Fetch Tags
    def get(self):
        tag = Tag.query.limit(15).all()
      
        if len(tag) != 0:
            return tags_schema.dump(tag)
        else:
            return {
                "message": "No Tags"
            }, 404


# Class for updating, deleting & fetching tags
class TagCRUD(Resource):

    # Update specific tag  
    @tag_exists
    def put(self, tag_id):
        tag = Tag.query.get(tag_id)
        form_data = request.get_json()
        validate_form_data = tag_form_schema.dump(form_data) 
        update_tag(tag, form_data)

        db.session.commit()

        return {
            "message": "Tag successfully updated"
        }, 200
    
    # Fetch specific tag 
    @tag_exists
    def get(self, tag_id):
        tag = Tag.query.get(tag_id)

        return tag_schema.dump(tag)    

    # Delete specific tag 
    @tag_exists
    def delete(self, tag_id):
        tag = Tag.query.get(tag_id)

        db.session.delete(tag)
        db.session.commit()

        return { 
            "message": "Tag successfully deleted" 
        }, 200


# Class to update followers 
class TagFollowers(Resource):
    def put(self, tag_id):
        user_data = session["profile"]
        user = User.query.get(user_data["user_id"])
        tag = Tag.query.get(tag_id)
  
        tag.users.append(user)
        db.session.commit()

        return {
            "message": user.name + "is now following" + tag.name
        }, 200


# # Creates the routes for the classes
api.add_resource(Tags, "/api/tags")
api.add_resource(TagCRUD, "/api/tags/<int:tag_id>")
api.add_resource(TagFollowers, "/api/tags/<int:tag_id>/followers")