import os
from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SECRET_KEY'] = "skdfsdjfsldfhlsdfl"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

app.app_context().push()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False, unique=True)
    feed = db.Column(db.String, nullable=False)
    gender = db.Column(db.String, nullable=False)


@app.route('/')
def home():
    return "Hello"


@app.route('/feed', methods=['POST', 'GET'])
def feed():
    if request.method == 'POST':
        email = request.form['email']
        name = request.form['name']
        feed = request.form['feed']
        gender = request.form['gender']
        print(email, name, feed, gender)
        user = User(
            name=name,
            email=email,
            feed=feed,
            gender=gender
        )
        db.session.add(user)
        db.session.commit()
        return "Feedback Submitted"
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
