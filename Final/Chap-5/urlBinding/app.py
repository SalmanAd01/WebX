from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello World'

@app.route('/user/<username>')
def user(username):
    return f'Hello {username}'

@app.route('/admin/<adminname>')
def admin(adminname):
    return f'Admin: {adminname}'

@app.route('/user/<type>/<name>')
def user_type(type, name):
    if type == 'admin':
        return f'Hello Admin {name}'
    elif type == 'user':
        return f'Hello User {name}'
    else:
        return f'Hello {name}'
if __name__ == '__main__':
    app.run(debug=True)