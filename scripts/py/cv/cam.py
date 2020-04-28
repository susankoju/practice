import cv2
import numpy as np
from tes import get_image_to_string
import matplotlib.pyplot as plt

cam = cv2.VideoCapture('https://192.168.0.107:8080/videofeed') #IP webcam link
print("Capturing {}".format(cam))


def homograph(img, corners, destinationPoints):
    h, w = img.shape[:2]
    H, _ = cv2.findHomography(
        np.array(corners),
        #np.array([[100, 100], [0, 800], [800, 900], [700, 200]]),
        np.array(destinationPoints),
        #np.array([[0, 0], [0, 1080], [720, 1080], [720, 0]]),
        method=cv2.RANSAC, ransacReprojThreshold=3.0)
    print("h:{}".format(H))
    print("Corners: ",corners)
    im = cv2.warpPerspective(img, H, (w,h), flags=cv2.INTER_LINEAR)
    cv2.imshow("Capture", im)
    return im


def applyFilter(img):
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    kernel = np.ones((5, 5), np.float32) / 15

    return cv2.filter2D(gray, -1, kernel)

def applyThreshold(filtered):
    ret, thresh = cv2.threshold(filtered, 250,255, cv2.THRESH_OTSU)

    return thresh

def detectContour(img, img_shape):
    canvas = np.zeros(img_shape, np.uint8)
    contours, hierarchy = cv2.findContours(img, cv2.RETR_TREE, cv2.CHAIN_APPROX_NONE)
    cnt = sorted(contours, key=cv2.contourArea, reverse=True)[0]

    return canvas, cnt

    
def getDestinationPoints(corners):
    w1 = np.sqrt((corners[0][0] - corners[1][0]) ** 2 + (corners[0][1] - corners[1][1]) ** 2)
    w2 = np.sqrt((corners[2][0] - corners[3][0]) ** 2 + (corners[2][1] - corners[3][1]) ** 2)
    w = max(int(w1), int(w2))

    h1 = np.sqrt((corners[0][0] - corners[2][0]) ** 2 + (corners[0][1] - corners[2][1]) ** 2)
    h2 = np.sqrt((corners[1][0] - corners[3][0]) ** 2 + (corners[1][1] - corners[3][1]) ** 2)
    h = max(int(h1), int(h2))

    return np.float32([(0, 0), (w - 1, 0), (0, h -1), (w - 1, h - 1)]), h, w


def getCorners(img):
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    corners = cv2.goodFeaturesToTrack(gray, 4, 0.01, 100)
    corners = np.int0(corners)
    corners = sorted(np.concatenate(corners).tolist())

    im = img.copy()
    for index, corner in enumerate(corners):
        x, y = corner
        cv2.circle(im, (x, y), 10, 255, -1)

    cv2.imshow("Capture", im)     

    return corners


def detectCornersFromContour(canvas, cnt):
    epsilon = 0.02 * cv2.arcLength(cnt, True)
    approx_corners = cv2.approxPolyDP(cnt, epsilon, True)
    approx_corners = sorted(np.concatenate(approx_corners).tolist())
    
    approx_corners = [approx_corners[i] for i in [0, 2, 1, 3]]

    return approx_corners


while True: 

    ret, frame = cam.read()
    if(ret):
        cv2.imshow("Capture", frame) 
        
    key = cv2.waitKey(33)
    if key == ord('q'):
        break
    elif key == ord(' '):
        #corners = getCorners(frame)
        # cv2.waitKey()
        # destinationPoints, w, h = getDestinationPoints(corners)
        # img = homograph(frame, corners, destinationPoints)
        
        filtered = applyFilter(frame)
        cv2.imshow("Filtered", filtered)
        thresh = applyThreshold(filtered)
        cv2.imshow("Thresh", thresh)
        canvas, cnt = detectContour(thresh, frame.shape)
        cv2.drawContours(canvas, cnt, -1, (0,255,255), 3)
        cv2.imshow("con",canvas)
        corners = detectCornersFromContour(canvas, cnt)
        dst, h, w = getDestinationPoints(corners)
        print("dest:{}".format(dst))
        img = homograph(frame, corners, dst)
        img_cropped = img[0:h, 0:w]
        cv2.imshow("Homograph",img_cropped)
        print(get_image_to_string(img_cropped))
        cv2.waitKey()
        
    
def stop():
    cam.release()
    cv2.destroyAllWindows()


stop()
