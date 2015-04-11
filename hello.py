from flask import Flask

app = Flask(__name__)


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api')
def api():
    return 'I am the API endpoint'

if __name__ == '__main__':
    app.run(debug=True)
