(print '(Welcome to The Wizard's Adventure Game))

;; describing scenery 
(defparameter *nodes*
  '((living-room (you are in the living-room. a wizard is snoring loudly on the couch.))
    (garden (you are in a beautiful garden. there is a well in front of you.))
    (attic (you are in the attic. there is a giant welding touch in the corner.)) ))

;; Describing the location
;;(assoc 'garden *nodes*)
;;(print *nodes*)
(defun describe-location (location nodes)
  (cadr (assoc location nodes)))
;;(describe-location 'attic *nodes*)

(defparameter *edges* '((living-room (garden west door) (attic upstairs ladder))
			(garden (living-room east door))
			(attic (living-room downstairs ladder))))

(defun describe-path (edge)
  `(there is a ,(caddr edge) going ,(cadr edge) from here.))
;;(describe-path '(living-room east door))

(defun describe-paths (location edges)
  (apply #'append (mapcar #'describe-path (cdr (assoc location edges)))))
;;(describe-paths 'living-room *edges*)
;;(cdr (assoc 'living-room *edges*))
;;(mapcar #'sqrt '(1 2 3 4 5))
;;(mapcar #'describe-path (cdr (assoc 'living-room *edges*)))
