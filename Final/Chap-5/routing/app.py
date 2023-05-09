from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello World'

@app.route('/about')
def about():
    return 'About page'

@app.route('/contact')
def contact():
    return 'Contact page'

@app.route('/user/<username>')
def user(username):
    return f'Hello {username}'

@app.route('/post/<int:post_id>')
def post(post_id):
    return f'Post ID: {post_id}'

if __name__ == '__main__':
    app.run(debug=True)