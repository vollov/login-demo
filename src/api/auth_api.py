# -*- coding: utf-8 -*-

from flask import Blueprint, Response, request
from flask.ext.restful import Resource

from domain.auth import User
from utils.json_utils import JsonUtil

class Login(Resource):
    
    def post(self):
        requests = JsonUtil.stringToCollection(request.data)
        try:
            email = requests['email']
            password = requests['password']
            print 'email: {0}, password: {1}'.format(email, password)
            user = User.query.filter(User.email == email).first()
            if user is not None and user.password == password :
                return Response(JsonUtil.objectToJson(user), mimetype='application/json')
            else:
                return {'flash':'Invalid email and password'}, 403
    
        except Exception as e:
            print e
            return 'Database error', 500
        
class Logout(Resource):
    
    def get(self):
        return {'flash':'calling server logout'}
