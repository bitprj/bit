from ..models import Tag

# Function to create a tag
def create_tag(form_data):
    tag = Tag(name=form_data["name"],
              summary=form_data["summary"],
              submission_guidelines=form_data["submission_guidelines"],
              about=form_data["about"],
              emoji=form_data["emoji"]
            )

    return tag