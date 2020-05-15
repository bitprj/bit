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


# Function to update a tag
def update_tag(tag, form_data):
  tag.name = form_data["name"]
  tag.summary = form_data["name"]
  tag.submission_guidelines = form_data["submission_guidelines"]
  tag.about = form_data["about"]
  tag.emoji = form_data["emoji"]

  return 