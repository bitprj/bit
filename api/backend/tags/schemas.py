from marshmallow import Schema, fields
import toastedmarshmallow


# Validates tag form
class TagFormSchema(Schema):
    name = fields.Str(required=True)
    summary = fields.Str(required=True)
    submission_guideline = fields.Str(required=True)
    about = fields.Str(required=True)
    emoji = fields.Str(required=True)

    class Meta:
        # Fields to show when sending data
        fields = ("name", "summary", "submission_guideline", "about", "emoji")
        ordered = True


class TagSchema(Schema):
    id = fields.Int(required=True)


tag_form_schema = TagFormSchema()
tag_schema = TagSchema()
tags_schema = TagSchema(many=True)
tag_form_schema.jit = toastedmarshmallow.Jit
tag_schema.jit = toastedmarshmallow.Jit
tags_schema.jit = toastedmarshmallow.Jit
