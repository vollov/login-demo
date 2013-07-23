# -*- coding: utf-8 -*-

from sqlalchemy import Column, Integer, String, Sequence, Boolean
from orm.database import Base

class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer,Sequence('user_id_seq'), primary_key=True)
    email = Column(String(24), unique=True)
    password = Column(String(16))
    active = Column(Boolean, unique=False, default=True)
    
    def __init__(self, email=None, password=None, is_active=True, oid=None):
        self.email = email
        self.password = password
        self.active = is_active
        self.id = oid
    

    def __repr__(self):
        return "<User('%d', %s', '%s')>" % (self.id, self.email, self.password)

    def dict(self):
        return {'id':self.id, 'name':self.email, 'password':self.password}
    
    #############################################################
    # method required by flask-login
    #############################################################
    
    def is_authenticated(self):
        return True
    
    def is_anonymous(self):
        return False
    
    def is_active(self):
        return self.active
    
    def get_id(self):
        return unicode(self.id)