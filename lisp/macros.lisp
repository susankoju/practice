(defmacro while (test &rest body)
  "Repeat body while test is true."
  (list* 'loop
       (list 'unless test '(return nil))
     body))
(macroexpand-1 '(while (< i 10)
		 (print (* i i))
		 (setf i (+ i 1))))
(while (< i 10)
	   (print (* i i))
	   (setf i (+ i 1)))
