import sys
import socket
import getopt

import threading
import subprocess

listen =- False
command =- False
upload =- False
execute = ""
target = ""
upload_destination = ""
port =- 0

def usage():
    print "Net Tool"
    print ""
    print "Usage: command_server.py -t target_host -p port"
    print "-l --listen listen on [host]:[port] for ncoming connections"
    print "-e --execute=file_to_run - execute the given file upon receiving connection"
    print "-c --command initialize a command shell"
    print "-u --upload=destination - upon receiving connection upload a file and write to [destination]"
    print
    print
    print
    print "Examples: "
    print "command_server.py -t 127.0.0.1 -p 5555 -l -c"
    print "command_server.py -t 192.168.0.1 -p 5555 -l -u=/bin/bash"
    print "command_server.py -t 127.0.0.1 -p 5555 -l -e=\"cat /etc/passwd\""
    print "echo 'ABCDEFGHIJKL' | ./command_serever.py -t 127.0.1 -p 135" 
    sys.exit(0)

def main():
    global listen
    global port
    global execute
    global command
    global upload_destination
    global target

    if not len(sys.argv[1:]):
        usage()
        
    try:
        opts, args = getopt.getopt(sys.argv[1:],"hle:t:p:cu:", ["help", "targer", "port", "command", "upload"])
    except getopt.GetoptError as err:
        print str(err)
        usage()
    

    for o, a in opts:
        print "Options: ", o, "\n", "Arguements: ", a
        if o in ("-h","--help"):
            usage()
        elif o in ("-l","--listen"):
            listen = True
        elif o in ("-e","--execute"):
            execute = a
        elif o in ("-d", "--upload"):
            upload_destination = a
        elif o in ("-c","--commandshell"):
            command = True
        elif o in ("-t","--target"):
            target = a
        elif o in ("-p","--port"):
            port = int(a)
        else:
            assert False,"Unhandled Option"

if __name__ == "__main__":
    main()
