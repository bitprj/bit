from marshmallow import Schema, fields


class MetaSchema(Schema):
    id = fields.Int(required=True, label="meta_id")
    roles = fields.Str(required=True)
    user_id = fields.Nested("UserSchema", only=("id",), many=False)
    student_id = fields.Nested("StudentSchema", only=("id",), many=False)
    teacher_id = fields.Nested("TeacherSchema", only=("id",), many=False)


# This schema is used to validate a Github access token
class ValidAccessTokenSchema(Schema):
    code = fields.Str(required=True)


meta_schema = MetaSchema()
valid_access_token = ValidAccessTokenSchema()
