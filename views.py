from flask import render_template, flash, url_for, redirect, json, jsonify, request
from models import db
import commons
import settings
import logging as log
import hashlib
log.basicConfig(level=log.DEBUG)



def index():
	return render_template('index.html')

def login():
	log.info("Login function called.")
	username = request.json['username']
	password = commons.encryptPassword(request.json['password'])
	user = db.view('byUsername/doc',key=username).rows[0]
	if(user['value']['username'] == username and user['value']['password'] == password):
		data=dict()
		data['username']=user['value']['username']
		data['uid']=user['value']['_id']
		data['email']=user['value']['email']
		data['hash']=user['value']['hash']
		data['contacts']=user['value']['contacts']
		data['fullname']=user['value']['fullname']
		return jsonify(data)
	return jsonify(success="false")

def logout():
	log.info("Logout function called.")
	return jsonify(success="true")

def register():
	if not commons.checkUsernameExists(request.json['username']):
		data=dict()
		data['type'] = "user"
		data['username']=request.json['username']
		data['password']=commons.encryptPassword(request.json['password'])
		data['email']=request.json['email']
		data['hash']=hashlib.sha1(request.json['email']).hexdigest()
		data['fullname']=request.json['fullname']
		data['contacts']=list()
		db.save(data)
		if data.has_key('_id'):
			data['uid'] = data['_id']
			# return jsonify(success='true',data=data)
			return jsonify(success='true')
		else:
			return jsonify(success="false",  error="cant save in db")
	else:
			return jsonify(success="false", error="username exists")
		
def add():
	if commons.addContact(request.args.get('userId'),request.args.get('email')):
		return jsonify(success="true")
	else:
		return jsonify(success="false")

def newMessage():
	if commons.post():
		data=dict()
		data['type'] = "message"
		data['message'] = request.json['message']
		data['from'] = dict()
		data['to'] = dict()
		data['from']['username'] = request.json['from']['username']
		data['from']['uid'] = request.json['from']['uid']
		data['to']['username'] = request.json['to']['username']
		data['to']['uid'] = "3d123352c8c4c8866f5158acc60010d7" # Default to vipin, rewrite.
		data['timestamp'] = request.json['timestamp']
		data['read'] = "false"
		db.save(data)
		return jsonify(success="true") # Return data
	else :
		return jsonify(success="false")
