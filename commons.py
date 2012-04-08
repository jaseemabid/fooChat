from flask import jsonify, request


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
