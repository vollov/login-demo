import json, ast

class JsonUtil:
    
    @staticmethod
    def listToJson(resultSet):
        result = []
        for item in resultSet:
            result.append(item.dict())
        return json.dumps(result)
    
    @staticmethod
    def objectToJson(item):
        return json.dumps(item.dict())
    
    @staticmethod
    def trueToJson():
        return json.dumps(True)
    
    @staticmethod
    def falseToJson():
        return json.dumps(False)
    
    @staticmethod
    def stringToCollection(value):
        if value is not None:
            return ast.literal_eval(value)
        else:
            return value
    
