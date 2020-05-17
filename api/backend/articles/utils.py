from ..models import Article


# Function to create an article
def create_article(form_data):
    article = Article(title=form_data["title"],
                          cover_image=form_data["cover_image"],
                          content=form_data["content"]                        
                          )

    return article


#Function to update an article
def update_article(article, form_data):
    article.title = form_data["title"]
    article.cover_image = form_data["cover_image"]
    article.content = form_data["content"]

    return