from flask import jsonify, request
from models import db
import hashlib
import settings

def get():
	if request.method == 'GET':
		return True
	else:
		return False

def post():
	if request.method == 'POST':
		return True
	else:
		return False

def encryptPassword(password):
	return hashlib.sha1(password+settings.salt).hexdigest()

def checkUsernameExists(username):
	user = db.view('byUsername/userId',key=username)
	if len(user.rows) > 0:
		return True
	else:
		return False

def emailHash(email):
	return hashlib.md5(email).hexdigest()

def checkContactExists(userId,contactName,contactId):
	user = db.view('byUserId/contacts',key=userId).rows[0]
	return user["value"].__contains__({"username":contactName,"hash":contactId})

def checkUserExists(email):
	user = db.view('byEmail/userDetails',key=email)
	if len(user.rows) > 0:
		return True
	else:
		return False
		
def getUserDetails(email):
	if checkUserExists(email) :
		user = db.view('byEmail/userDetails',key=email).rows[0] 
		return (user["value"][0],user["value"][1])
	else:
		return (0,0)
