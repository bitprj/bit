from ..backend.config import *
from flask import Flask
from flask_cors import CORS
from flask_github import GitHub
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)

app.config['GITHUB_CLIENT_ID'] = GITHUB_CLIENT_ID
app.config['GITHUB_CLIENT_SECRET'] = GITHUB_CLIENT_SECRET
app.config["PROPAGATE_EXCEPTIONS"] = True
app.config["SECRET_KEY"] = SECRET_KEY
app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


api = Api(app)
db = SQLAlchemy(app)
github = GitHub(app)
migrate = Migrate(app, db)
CORS(app, supports_credentials=True, resources={r"/*": {"origins": ["*"]}})

from ..backend.articles.routes import articles_bp
from ..backend.authentication.routes import authentication_bp
from ..backend.home.routes import home_bp
from ..backend.meta.routes import meta_bp
from ..backend.users.routes import user_bp

app.register_blueprint(articles_bp)
app.register_blueprint(authentication_bp)
app.register_blueprint(home_bp)
app.register_blueprint(meta_bp)
app.register_blueprint(user_bp)
