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
        fields = ("id","title", "cover_image", "content","date_published","likes","is_published",)
        ordered = True

article_form_schema = ArticleFormSchema()
article_form_schema.jit = toastedmarshmallow.Jit
article_schema = ArticleSchema()
article_schema.jit = toastedmarshmallow.Jit
articles_schema = ArticleSchema(many=True)
articles_schema.jit = toastedmarshmallow.Jit




    