from PIL import Image
im = Image.open("dog.jpg")

dark_blue = (0, 51, 76)
red = (217, 26, 33)
light_blue = (112, 150, 158)
yellow = (252, 227, 166)
new_pix= []

pix_val = list(im.getdata())
for item in pix_val:
    RGBsum = sum(item)
    if RGBsum < 182:
        new_pix.append(dark_blue)
    elif RGBsum >= 182 and RGBsum < 364:
        new_pix.append(red)
    elif RGBsum >= 364 and RGBsum < 546:
        new_pix.append(light_blue)
    elif RGBsum >= 546:
        new_pix.append(yellow)

recoloredImage = Image.new(im.mode, im.size)
recoloredImage.putdata(new_pix)
recoloredImage.save("output.jpg","jpeg")
recoloredImage.show()
