import logging as log
log.basicConfig(level=log.DEBUG)

def index():
	log.info("Index function called.")
	return "Hello world."
