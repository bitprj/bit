from .. import api, app, db, github
from ..authentication.utils import create_user
from ..authentication.decorators import access_token_exists, user_session_exists
from ..authentication.schemas import meta_schema
from ..models import Meta, Student, User
from flask import Blueprint, g, redirect, session
from flask_restful import Resource

# Blueprint for users
authentication_bp = Blueprint("authentication", __name__)


@authentication_bp.route("/github-callback")
@access_token_exists
@github.authorized_handler
def authorized(access_token):
    existing_user = None
    oauth_user = None
    meta = None

    if oauth_user is None:
        oauth_user = User(github_access_token=access_token)

    g.user = oauth_user
    github_user = github.get("/user")
    github_emails = github.get("/user/emails")
    existing_user = User.query.filter_by(github_id=github_user["id"]).first()

    if existing_user:
        oauth_user = existing_user
        meta = oauth_user.meta
    else:
        meta = Meta(roles="Student")
        db.session.add(meta)
        db.session.commit()
        oauth_user = create_user(github_user, github_emails, access_token, meta.id)
        student = Student(meta_id=meta.id)
        db.session.add(student)
        db.session.add(oauth_user)
        db.session.commit()

    session["profile"] = meta_schema.dump(meta)
    g.user = oauth_user

    # return session["profile"]
    return redirect("https://camp.bitproject.org", 200)


# Class to handle OAuth login for users
class UserOAuthLoginHandler(Resource):
    def get(self):
        if session.get("profile", None) is None:
            return github.authorize(scope="read:user, read:repo, user:email")
        else:
            return {
                       "message": "Already logged in"
                   }, 403


# Class to handle OAuth logout for users
class UserOAuthLogoutHandler(Resource):
    method_decorators = [user_session_exists]

    def get(self):
        session.pop("profile", None)

        return {
                   "message": "Successfully logged out"
               }, 200


@app.before_request
def before_request():
    g.user = None
    if "id" in session:
        g.user = User.query.get(session["id"])


@app.after_request
def after_request(response):
    db.session.remove()
    return response


@github.access_token_getter
def token_getter():
    oauth_user = g.user
    if oauth_user is not None:
        return oauth_user.github_access_token


# Creates the routes for the classes
api.add_resource(UserOAuthLoginHandler, "/login")
api.add_resource(UserOAuthLogoutHandler, "/logout")
