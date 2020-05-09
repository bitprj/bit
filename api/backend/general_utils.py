from .exceptions import UserSessionVerification
from flask import session


# Function to check if the user's session exists
# If not raise an Exception
def verify_user_session():
    if "profile" not in session:
        raise UserSessionVerification("User is not logged in", status_code=401)
