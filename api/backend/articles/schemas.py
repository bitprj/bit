from marshmallow import Schema, fields
import toastedmarshmallow

# This schema is used to display article data
class ArticleFormSchema(Schema):
    title = fields.Str(required=True)
    cover_image = fields.Str(required=False)
    content = fields.Str(required=False)


# This schema is used to display article data
class ArticleSchema(Schema):
    id = fields.Int(required=True)

    class Meta:
        # Fields to show when sending data
        fields = ("id",)
        ordered = True


article_form_schema = ArticleFormSchema()
article_schema = ArticleSchema()
articles_schema = ArticleSchema(many=True)
article_form_schema.jit = toastedmarshmallow.Jit
article_schema.jit = toastedmarshmallow.Jit
articles_schema.jit = toastedmarshmallow.Jit