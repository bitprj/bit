from marshmallow import Schema, fields


# This schema is used to display user data
class UserSchema(Schema):
    id = fields.Str(required=True)
    name = fields.Str(required=True)
    email = fields.Email(required=True)
    roles = fields.Str(required=False)
    image = fields.Str(required=True)

    class Meta:
        # Fields to show when sending data
        fields = ("id", "name", "email", "roles", "location", "image")
        ordered = True
