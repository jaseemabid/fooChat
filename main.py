from flask import Flask
import views

app = Flask(__name__)

"""
URL Settings
"""
app.add_url_rule('/', 'index', view_func = views.index)
app.add_url_rule('/api/user/login/', 'login', view_func = views.login, methods=['GET', 'POST'])
app.add_url_rule('/api/user/logout/', 'logout', view_func = views.logout)
app.add_url_rule('/api/user/register/', 'register', view_func = views.register, methods=['POST'])
app.add_url_rule('/api/message/new/', 'newMessage', view_func = views.newMessage, methods=['POST'])

if __name__ == '__main__':
	app.debug = True;
	app.run(port=50000)

