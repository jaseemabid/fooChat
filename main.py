from flask import Flask
import views

app = Flask(__name__)

"""
URL Settings
"""
app.add_url_rule('/', 'index', view_func = views.index)

if __name__ == '__main__':
	app.debug = True;
	app.run(port=50000)

