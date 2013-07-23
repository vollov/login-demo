import login_test
import unittest
from utils.settings import configuration

from datetime import timedelta
from flask_login import LoginManager
from itsdangerous import URLSafeTimedSerializer

class FlaskrTestCase(unittest.TestCase):

    def setUp(self):
        login_test.app.config['TESTING'] = True
        login_test.app.config["REMEMBER_COOKIE_DURATION"] = timedelta(days=14)
        
        self.app = login_test.app.test_client()
        self.app.secret_key = configuration.get('auth', 'secret_key')
        login_serializer = URLSafeTimedSerializer(self.app.secret_key)
        login_manager = LoginManager()

        
        login_manager.login_view = "/login"
        #Setup the login manager.
        login_manager.setup_app(self.app)
    
    def test_index(self):
        view = self.app.get('/')
        print view.data
#         assert 'You are not logged in' in view.data

if __name__ == '__main__':
    unittest.main()