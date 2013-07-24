# -*- coding: utf-8 -*-
from flask import Flask, request
from flask.ext import restful

app = Flask(__name__)


############################################################
# global view mapping start
############################################################


############################################################
# flask login api call back methods
############################################################


############################################################
#  Restful api registration strat
############################################################

def register_blueprints(application):
    #register angularjs front end
    from front_end import front
    application.register_blueprint(front)

    api = restful.Api(application)

    from api.auth import Login, Logout
    api.add_resource(Login, '/api/login')
    api.add_resource(Logout, '/api/logout')

if __name__ == '__main__':
    register_blueprints(app)
    app.run(debug=False)