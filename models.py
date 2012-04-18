import couchdb
import settings

couch = couchdb.Server(settings.couchServer)
db = couch[settings.database]
