from api.backend import db
import datetime


# A many to many relationship to keep track of tags and users
user_tag_rel = db.Table("user_tag_rel",
                    db.Column("user_id", db.Integer, db.ForeignKey("user.id"), primary_key=True),
                    db.Column("tag_id", db.Integer, db.ForeignKey("tag.id"), primary_key=True)
                )


class Article(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    cover_image = db.Column(db.Text, nullable=True)
    content = db.Column(db.Text, nullable=False)
    date_published = db.Column(db.DateTime, nullable=False, default=datetime.date.today)
    likes = db.Column(db.Integer, nullable=False, default=0)
    is_published = db.Column(db.Boolean, nullable=False, default=True)

    def __repr__(self):
        return f"Article('{self.id}')"
      

class Meta(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    roles = db.Column(db.Text, nullable=True)
    user = db.relationship("User", uselist=False, cascade="all,delete", back_populates="meta")
    admin = db.relationship("Admin", uselist=False, cascade="all,delete", back_populates="meta")
    student = db.relationship("Student", uselist=False, cascade="all,delete", back_populates="meta")
    teacher = db.relationship("Teacher", uselist=False, cascade="all,delete", back_populates="meta")


    def __repr__(self):
        return f"Meta('{self.id}')"


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=True)
    email = db.Column(db.Text, unique=True, nullable=True)
    token = db.Column(db.Text, unique=True, nullable=True)
    github_access_token = db.Column(db.String(255), nullable=True)
    github_id = db.Column(db.Integer, nullable=True)
    github_username = db.Column(db.String(255), nullable=True)
    image = db.Column(db.Text, nullable=True)
    meta_id = db.Column(db.Integer, db.ForeignKey('meta.id'))
    meta = db.relationship("Meta", back_populates="user")
    tags = db.relationship("Tag", secondary="user_tag_rel",               
                            back_populates="users")
   
    def __repr__(self):
        return f"User('{self.email}')"


class Admin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    meta_id = db.Column(db.Integer, db.ForeignKey('meta.id'))
    meta = db.relationship("Meta", back_populates="admin")

    def __repr__(self):
        return f"Admin('{self.id}')"


class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    meta_id = db.Column(db.Integer, db.ForeignKey('meta.id'))
    meta = db.relationship("Meta", back_populates="student")

    def __repr__(self):
        return f"Student('{self.id}')"


class Teacher(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    meta_id = db.Column(db.Integer, db.ForeignKey('meta.id'))
    meta = db.relationship("Meta", back_populates="teacher")

    def __repr__(self):
        return f"Teacher('{self.id}')"


class Tag(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.Text, nullable=False)
    summary = db.Column(db.Text, nullable=False)
    submission_guideline = db.Column(db.Text, nullable=False)
    about = db.Column(db.Text, nullable=False)
    emoji = db.Column(db.Text, nullable=False)
    users = db.relationship("User", secondary="user_tag_rel",               
                            back_populates="tags")

    def __repr__(self):
        return f"Tag('{self.id} , {self.name}')"

