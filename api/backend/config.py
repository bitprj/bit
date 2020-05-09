import os
from dotenv import load_dotenv
from os.path import dirname, join

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI')
SECRET_KEY = os.environ.get('SECRET_KEY')

GITHUB_ACCESS_TOKEN = os.environ.get("GITHUB_ACCESS_TOKEN")
GITHUB_CLIENT_ID = os.environ.get("GITHUB_CLIENT_ID")
GITHUB_CLIENT_SECRET = os.environ.get("GITHUB_CLIENT_SECRET")
