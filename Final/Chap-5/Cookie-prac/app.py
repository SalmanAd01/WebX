from flask import Flask, make_response,request

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello World'

@app.route('/singin',methods=['GET','POST'])
def singin():
    if request.method == 'POST' or 'username' in request.cookies:
        if 'username' not in request.cookies:
            username = request.form['username']
            resp = make_response(f'Hello {username}')
            resp.set_cookie('username',username)
        return f'Hello {request.cookies["username"]} <a href="/logout">Logout</a>'
    else:
        return '''
        <form method="post">
            <input type="text" name="username">
            <input type="submit" value="Submit">
        </form>
        '''

@app.route('/logout')
def logout():
    resp = make_response('Logout')
    resp.set_cookie('username','',max_age=0)
    return resp

if __name__ == '__main__':
    app.run(debug=True)