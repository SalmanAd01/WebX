from flask import Flask,request,session,redirect,url_for
from flask_session import Session

app = Flask(__name__)
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)


@app.route('/')
def index():
    return 'Hello World'

@app.route('/singin',methods=['GET','POST'])
def singin():
    if request.method == 'POST' or 'username' in session:
        if 'username' not in session:
            session['username'] = request.form['username']
        return f'Hello {session["username"]} <a href="/logout">Logout</a>'
    else:
        return '''
        <form method="post">
            <input type="text" name="username">
            <input type="submit" value="Submit">
        </form>
        '''

@app.route('/logout')
def logout():
    session.pop('username',None)
    return 'Logout'


if __name__ == '__main__':
    app.run(debug=True)