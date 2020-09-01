;;
;; Common Lisp Modules - AI in the Era of NN and Chaos Theory by Mark Watson
;; 
;; init-plot()   ;; create a graphics window
;; plot-fillrect(x y xsize ysize values)    ;; fills a rectangle with a gray-scale value
;; plot-size-recr(x y xsize ysize value)    ;; plots a rectangle a value pixels wide
;; clear-plot    ;; clears the graphics window
;; pen-width (nibs)    ;; sets the pen drawing width
;; plot-frame-rect(x y xsize ysize)    ;; plots a frame rectangle
;; plot-line(x1 y1 x2 y2)    ;; plots a line between two points
;; show-plot()    ;; shows graphics window
;; plot-string(x y string)    ;; plots a string at position (x y)
;; plot-string-bold(x y str)    ;; plots a bold string at position (x y)
;; plot-string-italic(x y str)    ;; plots a italic string at position (x y)
;; plot-mouse-down()    ;; returns a position of mouse
;;

; initializes a standard plot window:

(defun init-plot (&optional (title "Plot Window") (xSize 250) (ySize 250) )
  ;; create a graphics window
  (setq *w*
	(oneof *window* :window-title title
	       :window-size (make-point xSize ySize)
	       :window-type :document-with-zoom)))
