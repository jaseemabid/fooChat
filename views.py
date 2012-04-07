import logging as log
log.basicConfig(level=log.DEBUG)

def index():
	log.info("Index function called.")
	return "Hello world."

def login():
	log.info("Login function called.")
	# Demo login, write function later.
	return '{ \
		"uid":"3d123352c8c4c8866f5158acc6000366", \
		"fullName" : "Jaseem Abid" \
		}'


