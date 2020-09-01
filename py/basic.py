import os
import nmap

print("hello world")
a = [1, 3, 5, 8]

#print(a)

'''
for i in a:
    print(i)

a = 2
b = 2

if a == b :
    print('equal')
'''
#files = os.system('ls')
#for file in files:
#print(files)


def sum(first, second, **kwargs):
    return first + second

#print(dir(os))

#print(sum(2, 5))



'''
class Animal:
    def __init__(self, name):
        self.name = name

    def get_name(self):
        return self.name


pet = Animal(name="seru")

print(pet.get_name())


for i in range(50, 100):
    print(i)
'''

double = lambda a: a * 2

print(double(5))

#setInterval(() => { } , 10)


aa= 'nme'
a = aa if aa is 'name' else 'asd'
#print(a)

    
'''
with open('file.txt', 'w') as f:
    print(f.write("asddsaasdasd"))




try:
    print(12/0)
except Exception as e:
    print(e)
'''



files = os.system('ps')
print(files)

nm = nmap.PortScannerAsync()
print(nm)
