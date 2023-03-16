import base64
from io import BytesIO
from PIL import Image,ImageFilter
from asyncio.windows_events import NULL
from dis import dis
from turtle import distance
import flask.scaffold
flask.helpers._endpoint_from_view_func = flask.scaffold._endpoint_from_view_func
from flask import Flask,request,Response,json
from flask_cors import CORS
from flask_restful import Resource, Api
from colrizeImage import ColorizeImage
import sys
import os
import cv2
import numpy as np


app = Flask(__name__)
app.config['MAX_CONTENT_LENGTH'] = sys.maxsize
CORS(app)
api = Api(app)

colorizer = ColorizeImage()

class Colorize(Resource):
    def post(self):
        try:
            # Decode the base64-encoded JPEG and convert it to a PIL Image object
            #encoded_jpeg = request.form['image']
            data = request.get_json()
            encoded_jpeg = data['image']
            decoded_jpeg = base64.b64decode(encoded_jpeg)
            image = Image.open(BytesIO(decoded_jpeg))
            sharpened_image = image.filter(ImageFilter.SHARPEN)
            sharpened_image.save(r"C:\Users\afeka\Desktop\New folder\colorization\imgs\img_to_colorize.jpg")
            
            #sharpened_image = Image.fromarray(upsampled_array)

            #sharpened_image.save(r"C:\Users\afeka\Desktop\New folder\colorization\imgs\img_to_colorize.jpg")

            #img = cv2.imread(r'C:\Users\afeka\Desktop\New folder\colorization\imgs\img_to_colorize.jpg')

            # Apply a sharpening filter
            #kernel = np.array([[-1,-1,-1], [-1,9,-1], [-1,-1,-1]])
            #sharpened = cv2.filter2D(img, -1, kernel)

            # Save the sharpened image
            #cv2.imwrite(r'C:\Users\afeka\Desktop\New folder\colorization\imgs\img_to_colorize.jpg', sharpened)
            colorizer.colorize_picture()
            colorrized_pic = Image.open(r"C:\Users\afeka\Desktop\New folder\colorization\imgs_out\colorized_siggraph17.png")
            sharpened_image = colorrized_pic.filter(ImageFilter.SHARPEN)
            #decoded_jpeg = base64.b64decode(colorrized_pic)
            buffer = BytesIO()
            sharpened_image.save(buffer,format='png')
            encoded_processed_jpeg = base64.b64encode(buffer.getvalue()).decode('utf-8')

           # os.remove(r"C:\Users\afeka\Desktop\New folder\colorization\imgs\img_to_colorize")

            

            return Response(response=encoded_processed_jpeg,status=200)
        except Exception as e:
            return Response(response=f"failed,{e}",status=400)


api.add_resource(Colorize,'/ColorizePhoto')


if __name__ == '__main__':
    app.run(debug=True,port=5000)


