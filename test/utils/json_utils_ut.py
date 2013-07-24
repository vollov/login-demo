# -*- coding: utf-8 -*-

from utils.json_utils import JsonUtil
import unittest

class JsonUtilUt(unittest.TestCase):
    '''A Unit Test Demo'''

    def test_(self):
        line1 = '{"email":"mary@demo.org","password":"passwd"}'
        line2 = '{email:mary@demo.org,password:passwd}'
        print JsonUtil.stringToCollection(line1)
#         print JsonUtil.stringToCollection(line2)