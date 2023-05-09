from flask import Flask,url_for,redirect

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
        return redirect(url_for('admin', adminname=name))
    elif type == 'user':
        return redirect(url_for('user', username=name))
    else:
        return f'Hello {name}'
if __name__ == '__main__':
    app.run(debug=True)