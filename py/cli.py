import os
import argparse

print('Welcome to CLI Tool')
print("-------------------")
#print(dir(argparse))

arg_parser = argparse.ArgumentParser(description='Simple Python CLI tool')

arg_parser.add_argument('--name',type=str, help='--name name of user')
arg_parser.add_argument('--age',type=int, help='--age age of user')
arg_parser.add_argument('--run',type=str, help='--age which to run')
args = arg_parser.parse_args()
print("Name: {}".format(args.name))
print("Age: {}".format(args.age))

print("--------------------")

while True:
    i = input('python-cli >> ')
    os.system(i)
