import os

class ColorizeImage():
    def __init__(self):
        #self.image_url = image_url
        pass

    def colorize_picture(self):
        #os.system(r"cd C:\Users\afeka\Desktop\New folder\colorization")
        os.chdir(r"C:\Users\afeka\Desktop\New folder\colorization")
        print(os.getcwd())
        os.system(r"python demo_release.py -i imgs/img_to_colorize.jpg -o imgs_out/colorized")
    