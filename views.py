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
	username = request.form.get('username')
	password = request.form.get('password')
	passwordHash = password
	log.info("username : %s",username)
	log.info("password : %s",password)
	users = db.view('byUsername/doc')

	for user in users:
		log.info("doc : %s",user['value']['_id'])
		if(user.key == username):
			log.info("username : %s",user['value']['username'])
			log.info("password : %s",user['value']['password'])
			if(user['value']['username'] == username and user['value']['password'] == passwordHash):
				log.info("match :)");
				return jsonify(doc)

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
