from .. import api
from flask import Blueprint
from flask_restful import Resource
from ..models import Tag
from ..tags.decorators import tag_exists
from ..tags.schemas import tag_schema, tag_form_schema

# Blueprint for tags
tag_bp = Blueprint("tags", __name__)

# UpdateTag - /api/tags/<int:tag_id> PUT
# DeleteTag - /api/tags/<int:tag_id> DEL
# FetchTag - /api/tags/<int:tag_id> GET

# CreateTag - /api/tags POST
# FetchTags - /api/tags GET

# FollowTag - /api/tags/<int:tag_id>/followers PUT
###################################################

# Class for updating, deleting & fetching tags
class TagCRUD(Resource):
    
    # Fetch specific tag - GET
    def get(self, tag_id):
        tag = Tag.query.get(tag_id)     # Query by primary key

        return tag_schema.dump(tag)     # Return serialization with TagSchema


    # Delete specific tag - DEL
    def delete(self, tag_id):
        tag = Tag.query.get(tag_id)
        db.session.delete(tag)
        db.session.commit()

        return { 
            "message": "Tag successfully deleted" 
        }, 200


    # Update specific tag - PUT    
    def put(self, tag_id):
        tag = Tag.query.get(tag_id)



# Class to fetch and create tag
class Tag(Resource):

    # Create Tag
    def post(self):
        form_data = request.get_json()
        validated_form_data = tag_form_schema.dump(form_data)
        tag = create_tag(validated_form_data)

        db.session.add(tag)
        db.session.commit()

        return {
            "message": "Tag sucessfully created"
        }, 201

    # Fetch Tags - GET
    def get(self):


# Class to update followers
class TagFollowers(Resource):



# Creates the routes for the classes
api.add_resource(TagCRUD, "/api/tags/<int:tag_id>")
api.add_resource(Tags, "/api/tags")
api.add_resource(TagFollowers, "/api/tags/<int:tag_id>/followers")