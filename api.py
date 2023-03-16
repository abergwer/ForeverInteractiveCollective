import base64
from io import BytesIO
from PIL import Image
from asyncio.windows_events import NULL
from dis import dis
from turtle import distance
import flask.scaffold
flask.helpers._endpoint_from_view_func = flask.scaffold._endpoint_from_view_func
from flask import Flask,request,Response,json
from flask_cors import CORS
from flask_restful import Resource, Api
from colrizeImage import ColorizeImage
import os
app = Flask(__name__)
CORS(app)
api = Api(app)

colorizer = ColorizeImage()

class Colorize(Resource):
    def post(self):
        try:
            # Decode the base64-encoded JPEG and convert it to a PIL Image object
            encoded_jpeg = request.form['image']
            decoded_jpeg = base64.b64decode(encoded_jpeg)
            image = Image.open(BytesIO(decoded_jpeg))
            image.save(r"C:\Users\afeka\Desktop\New folder\colorization\imgs\img_to_colorize.jpg")
            colorizer.colorize_picture()
            colorrized_pic = Image.open(r"C:\Users\afeka\Desktop\New folder\colorization\imgs_out\colorized_siggraph17.png")
            #decoded_jpeg = base64.b64decode(colorrized_pic)
            buffer = BytesIO()
            colorrized_pic.save(buffer,format='png')
            encoded_processed_jpeg = base64.b64encode(buffer.getvalue()).decode('utf-8')

           # os.remove(r"C:\Users\afeka\Desktop\New folder\colorization\imgs\img_to_colorize")

            

            return Response(response=encoded_processed_jpeg,status=200)
        except Exception as e:
            return Response(response=f"failed,{e}",status=400)


api.add_resource(Colorize,'/ColorizePhoto')


if __name__ == '__main__':
    app.run(debug=True,port=5000)


