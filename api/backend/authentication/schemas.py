from marshmallow import Schema, fields


# This schema is used to validate a Github access token
class ValidAccessTokenSchema(Schema):
    code = fields.Str(required=True)


valid_access_token = ValidAccessTokenSchema()
