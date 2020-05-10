from marshmallow import Schema, fields
import toastedmarshmallow


# This schema is used to display user data
class UserSchema(Schema):
    id = fields.Str(required=True)
    name = fields.Str(required=True)
    email = fields.Email(required=True)
    roles = fields.Str(required=False)
    image = fields.Str(required=True)

    class Meta:
        # Fields to show when sending data
        fields = ("id", "name", "email", "roles", "image")
        ordered = True


user_schema = UserSchema()
user_schema.jit = toastedmarshmallow.Jit
