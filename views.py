from flask import render_template, flash, url_for, redirect, json, jsonify, request
from commons import get, post
import settings
import couchdb
import logging as log
log.basicConfig(level=log.DEBUG)

couch = couchdb.Server(settings.couchServer)
db = couch[settings.database]

def index():
	return render_template('index.html')

def login():
	log.info("Login function called.")
	# Demo login, write function later.
	username = request.json['username']
	password = request.json['password']
	passwordHash = password # update later


	users = db.view('byUsername/doc')

	for user in users:
		if(user.key == username):
			if(user['value']['username'] == username and user['value']['password'] == passwordHash):
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
	if post():
		data=dict()
		data['username']=request.args.get('username')
		data['password']=request.args.get('password')
		data['email']=request.args.get('email')
		db.save(data)
		if data.has_key('_id'):
			return jsonify(success='true',data=data)
		else:
			return jsonify(success="false")


def newMessage():
	if post():
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
