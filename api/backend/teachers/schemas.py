from marshmallow import Schema, fields


# This schema is used to display teacher data
class TeacherSchema(Schema):
    id = fields.Int(required=True)

    class Meta:
        # Fields to show when sending data
        fields = ("id",)
        ordered = True
