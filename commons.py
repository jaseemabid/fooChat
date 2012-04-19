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
	if  len(user.rows)  > 0:
		return True
	else:
		return False
		
def emailHash(email):
	return hashlib.sha1(email).hexdigest()
			
def checkContactExists(userId,contactName,contactId):
	user = db.view('byUserId/contacts',key=userId).rows[0]
	return user["value"].__contains__({"username":contactName,"hash":contactId})
	
def addContact(userId,contactName,contactId):
	if checkContactExists(userId,contactName,contactId) is False:
		user=db[userId]
		user["contacts"].append({"username":contactName,"hash":contactId})
		db.save(user)
		return True
	
		
			
			
