# -*- coding: utf-8 -*-

from flask import Blueprint, Response, request
from flask.ext.restful import Resource, reqparse
# from domain.auth import User
# from orm.database import db_session
# from utils.json_utils import JsonUtil
# 
# from flask_login import login_required,logout_user, current_user, login_user
# 
# class UserApi(Resource):
#     
# #     @login_required
#     def get(self):
#         print "calling /api/users/get"
#         try:
#             users = User.query.all()
#             return Response(JsonUtil.listToJson(users), mimetype='application/json')
#             
#         except Exception as e:
#             print e
#             return '', 500
                         
class Login(Resource):
    def post(self):
        print 'get post:', request.form['password']
        return {'flash':'Calling login in server'}

class Logout(Resource):
    def get(self):
        return {'flash':'Calling logout in server'}