# Makefile for fooChat

SRC_DIR = static/js

JS_ENGINE ?= `which node nodejs 2>/dev/null`
COMPILER = jsmin

JS_LIBS = ${SRC_DIR}/jquery-1.7.1.min.js \
	${SRC_DIR}/jquery.timeago.min.js \
	${SRC_DIR}/underscore-min.js \
	${SRC_DIR}/backbone-min.js \
	${SRC_DIR}/less-1.2.1.min.js \
	${SRC_DIR}/bootstrap.min.js

BASE_FILES = ${SRC_DIR}/models.js \
	${SRC_DIR}/models.js

MODULES = ${JS_LIBS}\
	${SRC_DIR}/intro.js\
	${BASE_FILES}\
	${SRC_DIR}/outro.js\
	${SRC_DIR}/onload.js

FC = ${SRC_DIR}/foochat.js
FC_MIN = ${SRC_DIR}/foochat.min.js

FC_VER = $(shell git log --pretty=format:"%h" -n 1)

DATE = $(shell git log -1 --pretty=format:%ad)

all: foochat min
	@@echo "fooChat build complete."

foochat: ${FC}

${FC}: ${MODULES} | ${SRC_DIR}
	@@echo "Building the file" ${FC};
	@@cat ${MODULES} > ${FC};

min: foochat ${FC_MIN}

${FC_MIN}: ${FC}
	@@if test ! -z ${JS_ENGINE}; then \
		echo "Minifying fooChat" ${FC_MIN}; \
		${COMPILER} < ${FC} > ${FC_MIN} Version:${FC_VER} ; \
	else \
		echo "You must have NodeJS installed in order to minify fooChat."; \
	fi

clean:
	@@echo "Cleaning up build files"
	@@rm -f ${SRC_DIR}/foochat.js ${SRC_DIR}/foochat.min.js

.PHONY: all foochat min clean
