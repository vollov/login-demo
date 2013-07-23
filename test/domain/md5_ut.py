# -*- coding: utf-8 -*-

import unittest,md5


class UserUt(unittest.TestCase):
    '''A Unit Test Demo'''

    def test_digest(self):
        print md5.new('passwd').hexdigest()