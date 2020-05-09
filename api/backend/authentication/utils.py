from ..models import User


# Function to choose which user to create, based on user_type
def create_user(oauth_user_data, oauth_emails, access_token, meta_id):
    user = User(name=oauth_user_data["name"],
                email=oauth_emails[0]["email"],
                image=oauth_user_data["avatar_url"],
                github_id=oauth_user_data["id"],
                github_username=oauth_user_data["login"],
                github_access_token=access_token,
                meta_id=meta_id
                )

    return user
