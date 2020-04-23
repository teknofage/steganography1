from PIL import Image 

def decode_image(file_location):
    encoded_image = Image.open("encoded_sample.png")
    red_channel = encoded_image.split()[0]
    
    x_size = encoded_image.size[0]
    y_size = encoded_image.size[1]
    print("x_size: ", x_size)
    print("y_size: ", y_size)
    decoded_image = Image.new("RGB", encoded_image.size)
    pixels = decoded_image.load()
    
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
            
    decoded_image.save("decoded_image.png")
    
decode_image("encoded_sample.png")



