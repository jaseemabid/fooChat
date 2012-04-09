from flask import jsonify, request
from commons import get, post
import settings
import couchdb
import logging as log
log.basicConfig(level=log.DEBUG)

couch = couchdb.Server()
db = couch[settings.database]

def index():
	log.info("Index function called.")
	return "Hello world."

def login():
	log.info("Login function called.")
	# Demo login, write function later.
	return '{ \
			"uid": "3d123352c8c4c8866f5158acc6000366", \
			"fullname": "Jaseem Abid", \
			"username": "jaseemabid", \
			"hash": "40901f06ff8e7bb58e200630c613d647" \
			}'
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
