from PIL import Image, ImageOps

def recode_image(file_location):
    decoded_image = Image.open("decoded_image.png")
    red_channel = decoded_image.split()[0]
    
    x_size = decoded_image.size[0]
    y_size = decoded_image.size[1]
    print("x_size: ", x_size)
    print("y_size: ", y_size)
    recoded_image = Image.new("RGB", decoded_image.size)
    pixels = recoded_image.load()
    
    #TODO: Fill in decoding functionality
    print("red_channel: ", red_channel.getdata())
    for x in range(x_size):
        for y in range(y_size):
            # To get R values for an image at X, Y:
            pic = red_channel.getpixel((x,y))
            
            pic = bin(pic)
            
            pic = list(pic)
            
            pix = int(pic[-1])
            print(pix)
            if pix == 1:
                print(1)
                pixels[x,y] = (0,0,0)
            else: 
                print(0)
                pixels[x,y] = (255, 255, 255)
            
    recoded_image.save("stegosaurus.png")
    
recode_image("decoded_image.png")



