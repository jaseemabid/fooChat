from flask import jsonify, request
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
