import logging as log
log.basicConfig(level=log.DEBUG)

def index():
	log.info("Index function called.")
	return "Hello world."

def login():
	log.info("Login function called.")
	# Demo login, write function later.
	return '{ \
			"uid": 1234, \
			"fullname": "Jaseem Abid", \
			"username": "jaseemabid", \
			"hash": "40901f06ff8e7bb58e200630c613d647" \
			}'
