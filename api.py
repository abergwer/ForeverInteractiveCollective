from asyncio.windows_events import NULL
from dis import dis
from turtle import distance
import flask.scaffold
flask.helpers._endpoint_from_view_func = flask.scaffold._endpoint_from_view_func
from flask import Flask,request,Response,json
from flask_cors import CORS
from flask_restful import Resource, Api

app = Flask(__name__)
CORS(app)
api = Api(app)



class Test(Resource):
    def get(self):
        try:
            print("hiii")
            return Response(response="succses",status=200)
        except:
            return Response(response="failed",status=400)


api.add_resource(Test,'/test/')


if __name__ == '__main__':
    app.run(debug=True,port=5000)


