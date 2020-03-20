import cv2
import numpy as np

cam = cv2.VideoCapture('https://192.168.0.102:8080/videofeed') #IP webcam link
print("Capturing {}".format(cam))

def doWork(img):
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)   
    cv2.imshow("Capture", gray)
    key = cv2.waitKey()
    if key  == ord('q'):
        stop()
    elif str(key) == '13':
        blockSize = 2
        aperatureSize = 3
        k = 0.04
        #gray = np.float32(gray)

        #filter
        kernel = np.ones((5, 5), np.float32) / 8.5
        filtered  = cv2.filter2D(gray, -1, kernel)
        gray = filtered
        
        cv2.imshow("Capture", gray)
        cv2.waitKey()
        
        dst = cv2.cornerHarris(gray, blockSize, aperatureSize, k)
        dst = cv2.dilate(dst, None)
 
        img[dst>0.01*dst.max()] = [0, 255, 0]
        
        cv2.imshow("Capture", img)     
        key = cv2.waitKey()
    else:
        print(key)
    
while True:

    ret, frame = cam.read()
    if(ret):
        cv2.imshow("Capture", frame)
        
    key = cv2.waitKey(33)
    if key == ord('q'):
        break
    elif key == ord(' '):
        print("ret = {} \n frame={} ".format(ret, frame))
        doWork(frame)
        
    
def stop():
    cam.release()
    cv2.destroyAllWindows()


stop()
