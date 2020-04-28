import cv2
import json
import pytesseract

def get_image_to_string(img):

    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    txt = pytesseract.image_to_string(img)

    return txt
