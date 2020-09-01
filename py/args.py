#!/usr/bin/env python
import argparse
import datetime

#print(__file__)

#print(__name__)

#print(globals())

parser = argparse.ArgumentParser(description="My arg parser")

def dob_parser(value):
    try:
        return datetime.datetime.striptime(value, "%d/%m/%Y")
    except (ValueError, TypeError):
        return False

parser.add_argument("--dob", help="DOB", type=dob_parser)
        

class Hello:
    def __init__(self):
        print(self.__class__.__name__)
        pass

    @staticmethod
    def main(args):
        print(args)

    @classmethod
    def new_from_args(cls, *args):
        return cls(*args)

def main(arg, *args, hostname=None, **kwarg):
    #print(args)
    #print(locals())
    print(hostname)
    h = Hello()
    
    return 0

if __name__ == "__main__":
    #print(dir(main))
    import sys

    sys.exit(main(sys.argv, hostname="hello"))
